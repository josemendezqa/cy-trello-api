const dev = require('./dev.json');

exports.getEnv = function (envSelected) {
    let environmentList = {
        dev: dev
    };
    return environmentList[envSelected] || environmentList.dev;
};

exports.getDevEmail = function () {
    return dev.userName; // Assuming 'userName' contains the email address
};

exports.getDevPassword = function () {
    return dev.userPassword; // Assuming 'userName' contains the email address
};
