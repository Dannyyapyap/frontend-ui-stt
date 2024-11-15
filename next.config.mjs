/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

    return [
      // STT routes
      {
        source: "/stt/transcribe/:path*",
        destination: `${apiEndpoint}/stt/transcribe/:path*`,
      },
      // Data routes
      {
        source: "/data/:path*",
        destination: `${apiEndpoint}/data/:path*`,
      },
    ];
  },
};

export default nextConfig;
