/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "brumai.github.io"
            },
            {
                protocol: "https",
                hostname: "pbs.twimg.com"
            },
            {
                protocol: "https",
                hostname: "secure.meetupstatic.com"
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com"
            },
        ]
    }
}

module.exports = nextConfig;

