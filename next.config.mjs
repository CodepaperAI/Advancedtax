/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "advancedtax.com.au",
        pathname: "/wp-content/uploads/**"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about",
        permanent: true
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true
      },
      {
        source: "/privacy",
        destination: "/legal/privacy",
        permanent: true
      },
      {
        source: "/terms-of-business",
        destination: "/legal/terms",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
