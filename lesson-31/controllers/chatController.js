// controllers/chatController.js
"use strict";

const Message = require("../models/Message");

/**
 * Listing 30.4 (p. 445)
 * chatController.js에서의 채팅 소켓 커넥션 처리
 */
module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected");

    /**
     * Listing 31.11 (p. 460)
     * 최근 메시지 읽어들이기
     */
    Message. find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .then(messages => {
        messages.reverse().forEach(msg => {
          io.emit("message", message);
    });
  })
    .catch(error => {
    console.log(`error: ${error.message}`);
    });
    
    socket.on("disconnect", () => {
      console.log("User disconnected!");
  });


    /**
     * Listing 31.2 (p. 451)
     */
    socket.on("message", data =>{
      let msgAttr = {
        content : data.content,
        userFullName: data.fullname,
        username: data.username,
        userId: data.userId
      };
      let m= new Message(msgAttr);
      m.save()
        .then(( ) => {
          io.emit("message", msgAttr);
        })
        .catch(error => {
          console.log(`error: ${error.message}`);
        })

    });

    /**
     * Listing 31.5 (p. 453)
     * 소켓 데이터의 수신
     */

    /**
     * Listing 31.10 (p. 459)
     * message 저장
     */
  });
};
