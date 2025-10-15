/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // CSP base (adatteremo quando riattivi Stripe/analytics)
          { key: "Content-Security-Policy", value:
            "default-src 'self'; img-src 'self' data: blob:; media-src 'self' data:; font-src 'self' data:; " +
            "script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self'; frame-ancestors 'self';"
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: '/crear-canal', destination: '/es/creator/onboarding', permanent: true },
      { source: '/crear',       destination: '/es/creator/onboarding', permanent: true },
      { source: '/create-channel', destination: '/es/creator/onboarding', permanent: true },
      { source: '/en/create-channel', destination: '/es/creator/onboarding', permanent: false },
      { source: '/fr/creer-chaine',   destination: '/es/creator/onboarding', permanent: false },
    ];
  },
};
export default nextConfig;
