const app = require('./app.json')
const dev = require('./dev.json')

exports.getEnv = function (envSelected) {
	let environmentList = {
		app: app,
		dev:dev
	}
	return environmentList[envSelected] || environmentList.dev
}
