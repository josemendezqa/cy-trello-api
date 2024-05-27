const { defineConfig } = require('cypress')
const { getEnv } = require('./config/environment-handler')

module.exports = defineConfig({
	projectId: 'v4irry',
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		reportPageTitle: 'Trello API test suite report',
	},
	e2e: {
		experimentalModifyObstructiveThirdPartyCode: true,
		experimentalSessionAndOrigin: true,
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
			config.env.credentials = getEnv(config.env.envSelected.credentials)

			return config
		},
	},
})
