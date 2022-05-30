const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register a Listener 
emitter.on("messageLogged", (arg) => {
    console.log('Listener called', arg)
});

// Raise: Logging (data: message)
emitter.emit('Message', { data: "Hola uwu"})

// Raise an Event
// emitter.emit('messageLogged', { id: 1, url: "http" });
