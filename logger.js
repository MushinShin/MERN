// var url and function log are scoped to this module not visible from outside.
var url = 'http://mylogger.io/log';

function log(message) {
    // Send http request
    console.log(message);
}

// exports function
module.exports.log = log;

// export object (when multiple methods inside module)
module.exports.log = log;

// exports variable
// module.exports.endPoint = url;