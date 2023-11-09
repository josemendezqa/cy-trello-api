const { defineConfig } = require('cypress')
const { getEnv } = require('./config/environment-handler')

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		reportPageTitle: 'Trello API test suite report',
	},
	e2e: {
		setupNodeEvents(on, config) {
			on('before:run', async (details) => {
				console.log('override before:run')
				await beforeRunHook(details)
			})

			on('after:run', async () => {
				console.log('override after:run')
				await afterRunHook()
			})
			require('cypress-mochawesome-reporter/plugin')(on)

			require('@cypress/grep/src/plugin')(config)

			config.env.envCredentials = getEnv(config.env.envSelected)

			return config
		},
	},
})
