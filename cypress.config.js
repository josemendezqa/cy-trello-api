const { defineConfig } = require('cypress')
const { getEnv } = require('./config/environment-handler')

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			config.env.envCredentials = getEnv(config.env.envSelected)

			return config
		},
	},
})
