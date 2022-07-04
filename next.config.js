module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [{loader: 'file-loader'}],
    })

    return config
  },
  future: {
    webpack5: true,
  }
}
