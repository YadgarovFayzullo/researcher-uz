import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['ucarecdn.com',  'cdn.sanity.io' , 'images.unsplash.com'],
    },
};
 
export default withNextIntl(nextConfig);