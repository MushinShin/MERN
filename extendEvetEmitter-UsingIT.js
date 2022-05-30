const EventEmitter = require("events");

// Instans of custom class defined in logger.js
const Logger = require('./logger');
const logger = new Logger();

// Register a Listener 
logger.on("messageLogged", (arg) => {
    console.log('Listener called', arg)
});

logger.log("Message");

