/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "links.papareact.com",
            },
            {
                protocol: "https",
                hostname: "platform-lookaside.fbsbx.com",
            },
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
            },
        ],
    },
};

module.exports = nextConfig;
