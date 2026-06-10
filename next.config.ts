import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.apasociados.co",
          },
        ],
        destination: "https://apasociados.co/:path*",
        permanent: true,
      },
      {
        source: "/",
        destination: "/es",
        permanent: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
