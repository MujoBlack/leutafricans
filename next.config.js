/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{   
                hostname: 'localhost',
				protocol: 'http',
				pathname: '**',
                port:'3000',
			},
			
		],
	},
};

module.exports = nextConfig
