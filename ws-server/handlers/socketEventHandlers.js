//logging websocket events

const socketEventHandlers = {
    error(err) {
        console.error(err)
    },
    open(socket) {
        console.log('Socket connected', socket)
    },
    close(code, reason) {
        console.log(`Socket closing, reason: ${reason}`, code)
    },
}

// turning the object into an array of [key, value] pairs
module.exports.registerSocketEventHandlers = (socket) => {
    Object.entries(socketEventHandlers).forEach(([event, handler]) => {
        socket.on(event, (...args) => {
            try {
                handler(...args)
            } catch (err) {
                console.log(err)
            }
        })
    })
}
