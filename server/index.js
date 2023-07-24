const { Server } = require("socket.io");

const io = new Server(4000, {
    cors : true,
});

io.on("connection" , (socket) => {
    console.log(`Socket Connected`, socket.id)
})
