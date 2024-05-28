const credentials = require('./dev.json');

exports.getEnv = function (envSelected) {
    let environmentList = {
        'dev': credentials
    };
    return environmentList[envSelected] || environmentList['dev'];
};


/*
exports.getDevEmail = function () {
    return credentials.userName; // Assuming 'userName' contains the email address
};

exports.getDevPassword = function () {
    return credentials.userPassword; // Assuming 'userName' contains the email address
};
*/