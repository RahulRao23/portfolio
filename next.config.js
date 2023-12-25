/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { isServer }) => {
    // Add the file-loader rule for PDF files
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            outputPath: 'static/images/',
            name: '[name].[ext]',
          },
        },
      ],
    });
		return config;
  },
}

module.exports = nextConfig
