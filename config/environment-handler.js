const app = require('./app.json')

exports.getEnv = function (envSelected) {
	let environmentList = {
		app: app,
	}
	return environmentList[envSelected] || environmentList.app
}
