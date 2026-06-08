import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:3001';
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  async redirects() {
    return [
      { source: '/Edu',      destination: '/Edu/index.html',      permanent: true },
      { source: '/efysia',   destination: '/efysia/index.html',   permanent: true },
      { source: '/NutriSnap',destination: '/NutriSnap/index.html',permanent: true },
      { source: '/OncoPro',  destination: '/OncoPro/index.html',  permanent: true },
      { source: '/RejuvIA',  destination: '/RejuvIA/index.html',  permanent: true },
      { source: '/ROMIMED',  destination: '/ROMIMED/index.html',  permanent: true },
      { source: '/edu',      destination: '/Edu/index.html',      permanent: false },
      { source: '/nutri',    destination: '/NutriSnap/index.html',permanent: false },
      { source: '/oncopro',  destination: '/OncoPro/index.html',  permanent: false },
      { source: '/rejuvia',  destination: '/RejuvIA/index.html',  permanent: false },
      { source: '/romimed',  destination: '/ROMIMED/index.html',  permanent: false },
      { source: '/efysia-app', destination: '/efysia/index.html', permanent: false },
    ];
  },

  async rewrites() {
    return [
      // Los navegadores piden /favicon.ico por defecto; sin esto suelen ver 404 y el icono falla o parpadea.
      {
        source: '/favicon.ico',
        destination: '/images/iconoROMI.png',
      },
      {
        source: '/auth/:path*',
        destination: `${API_BASE}/auth/:path*`,
      },
      {
        source: '/api-romi/:path*',
        destination: `${API_BASE}/:path*`,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
