/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permite que next/image sirva imágenes locales de /public sin config extra
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Deshabilita telemetría en build CI/CD
  env: {
    NEXT_TELEMETRY_DISABLED: "1",
  },
};

export default nextConfig;
