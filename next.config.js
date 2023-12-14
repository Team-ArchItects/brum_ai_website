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
            }
        ]
    }
}

module.exports = nextConfig
// module.exports = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'images.unsplash.com',
//                 port: '',
//                 pathname: '',
//             }
//         ]
//     }
// }
