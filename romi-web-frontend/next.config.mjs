/** @type {import('next').NextConfig} */
const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:3001';

const nextConfig = {
  async redirects() {
    return [
      { source: '/Edu',      destination: '/Edu/index.html',      permanent: true },
      { source: '/efysia',   destination: '/efysia/index.html',   permanent: true },
      { source: '/NutriSnap',destination: '/NutriSnap/index.html',permanent: true },
      { source: '/OncoPro',  destination: '/OncoPro/index.html',  permanent: true },
      { source: '/RejuvIA',  destination: '/RejuvIA/index.html',  permanent: true },
      { source: '/ROMIMED',  destination: '/ROMIMED/index.html',  permanent: true },
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

export default nextConfig;
