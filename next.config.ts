import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'travelblog.skillbox.cc',
                port: '',
                pathname: '/**', // Разрешает загрузку изображений из любой папки на этом домене
            },
        ],
    },
}
  /* config options here */


export default nextConfig;
