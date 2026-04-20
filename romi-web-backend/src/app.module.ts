import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PreconsultationsModule } from "./preconsultations/preconsultations.module";

import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { CallModule } from './call/call.module';
import { ChatModule } from './chat/chat.module';
import { NotificationsModule } from './notifications/notifications.module';
import { RealtimeModule } from './realtime/realtime.module';
import { CronModule } from './cron/cron.module';
import { ClinicalNotesModule } from './clinical-notes/clinical-notes.module';
import { HealthModule } from "./health/health.module";
import { ContactModule } from './contact/contact.module';

const syncEnv = process.env.DB_SYNC?.toLowerCase();
const shouldSynchronize =
  syncEnv === 'true' ||
  (syncEnv !== 'false' && process.env.NODE_ENV !== 'production');

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST ?? 'localhost',
      port: parseInt(process.env.DB_PORT ?? '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      ssl:
        (process.env.DB_SSL ?? 'false').toLowerCase() === 'true'
          ? { rejectUnauthorized: false }
          : undefined,
      extra:
        (process.env.DB_SSL ?? 'false').toLowerCase() === 'true'
          ? { sslmode: 'require' }
          : undefined,
      autoLoadEntities: true,
      // Never auto-sync schema in production – run migrations instead
      synchronize: shouldSynchronize,
    }),
    RolesModule,
    UsersModule,
    AuthModule,
    AppointmentsModule,
    CallModule,
    ChatModule,
    NotificationsModule,
    ContactModule,
    RealtimeModule,
    CronModule,
    ClinicalNotesModule,
    HealthModule,
    PreconsultationsModule,

  ],
})
export class AppModule { }
