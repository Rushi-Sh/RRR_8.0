/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['encrypted-tbn0.gstatic.com','i.imgur.com'], 
    },
    async rewrites() {
        return [
            {
                source: '/api/chatbot/:path*',
                destination: 'https://llm-vision.onrender.com/:path*'
            }
        ];
    }
};

export default nextConfig;