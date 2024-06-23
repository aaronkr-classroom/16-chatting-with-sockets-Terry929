// controllers/chatController.js
"use strict";

/**
 * Listing 30.4 (p. 445)
 * chatController.js에서의 채팅 소켓 커넥션 처리
 */
module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log("User connected!");
    
        socket.on("disconnect", () => {
            console.log("User disconnected!");
        });
        socket.on("message", ()=> {
            io.emit("message", {
                content: "Hello World!"
            });
        });
    })
};
