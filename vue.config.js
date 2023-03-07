module.exports = {
	devServer: {
		disableHostCheck: true,
		proxy: "https://comiteo-eats.victormx.com",
	},
	configureWebpack: {
		devtool: 'eval-source-map'
	},
	css: {
		loaderOptions: {
			sass: {
                prependData: `@import "~@/variables.sass"`
			},
			scss: {
				prependData: `@import "~@/variables.scss";`
			}
		}
	}
}
