import { withGluestackUI } from "@gluestack/ui-next-adapter";
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias["@unitools/image"] = "@unitools/image-next";
    config.resolve.alias["@unitools/link"] = "@unitools/link-next";
    config.resolve.alias["@unitools/router"] = "@unitools/router-next";
    config.resolve.alias["@unitools/env"] = "@unitools/env-next";
    return config;
  },
  reactStrictMode: true,
  transpilePackages: [
    "nativewind",
    "react-native-css-interop",
    "react-native-international-phone-number",
    "react-native-country-codes-picker",
    "@app-launch-kit/components",
    "react-native-keyboard-aware-scroll-view",
  ],
  experimental: {
    serverActions: {
      includeModule: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
    ],
  }
};

export default withGluestackUI(nextConfig);
