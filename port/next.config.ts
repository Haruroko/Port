import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'lh5.googleusercontent.com', // 여기에 도메인을 추가
      "file.gamejob.co.kr",
      "i.namu.wiki",
      "avatars.githubusercontent.com"
    ],
  },
};

export default nextConfig;
