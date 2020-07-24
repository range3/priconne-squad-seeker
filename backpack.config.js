module.exports = {
  webpack (config, options, webpack) {
    // remove source-map support
    config.devtool = false
    config.plugins = config.plugins.filter(plugin => !(plugin instanceof webpack.BannerPlugin))

    return config
  },
}
