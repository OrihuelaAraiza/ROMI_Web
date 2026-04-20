import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, In, Repository } from 'typeorm';
import { Role, RoleName } from './role.entity';

@Injectable()
export class RolesSeed implements OnApplicationBootstrap {
  private readonly logger = new Logger(RolesSeed.name);

  constructor(
    @InjectRepository(Role) private readonly repo: Repository<Role>,
    private readonly dataSource: DataSource,
  ) {}

  async onApplicationBootstrap() {
    const tableName = this.repo.metadata.tablePath;
    const [result] = await this.dataSource.query(
      'SELECT to_regclass($1) AS table_name',
      [tableName],
    );

    if (!result?.table_name) {
      this.logger.warn(
        `Skipping role seed because table "${tableName}" does not exist yet.`,
      );
      return;
    }

    const desired = Object.values(RoleName);
    const existing = await this.repo.find({ where: { name: In(desired) } });
    const missing = desired.filter((n) => !existing.find((r) => r.name === n));
    if (missing.length) {
      await this.repo.save(missing.map((name) => this.repo.create({ name })));
    }
  }
}
