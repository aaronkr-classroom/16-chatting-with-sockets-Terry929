[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=15293431)
# 16-node-chatting

B보강 Node 실습 - Unit 7 lessons 30, 31, 32, 33

# 채팅 기능 추가

이번 과제에서는 "채팅 기능 추가" 배웁니다.

이 과제는 4 부분으로 나뉩니다.

1. 'socket. io로의 작업' (30장)
2. '채팅 메시지의 저장' (31장)
3. '채팅 알림 표시 추가' (32장)
4. '캡스톤 7: 채팅 기능 추가' (33장) - 추가한 코드가 없습니다.

---

## 1. socket. io로의 작업

1. Node.js 애플리케이션에서의 socket.io 구현<br>
   Add socket.io to the project and configure it in the app.js file.
2. 컨트롤러 내에서 socket.io 구성<br>
   Configure socket.io within the controller.
3. 간단한 채팅 기능 생성<br>
   Create a simple chat feature.

---

## 2. 채팅 메시지의 저장

1. 메시지 모델 생성<br>
   Create a message model.
2. socket.io 이벤트 핸들러에 메시지 저장<br>
   Save messages in the socket.io event handler.
3. 새로운 소켓 커넥션에서 메시지 쿼리<br>
   Query messages on a new socket connection.

---

## 3. 채팅 알림 표시 추가

1. 사용자정의 이벤트의 브로드캐스팅<br>
   Broadcast custom events.
2. 이벤트 응답에서 아이콘의 애니메이팅<br>
   Animate an icon in response to an event.

---

## 4. 채팅 기능 추가

추가한 코드가 없습니다.

---

## 과제 파일

These files will need to be updated to complete the assignment. / 이 파일들을 업데이트하여 과제를 완료해야 합니다.

- **16-node-chatting `(18/18)`** _(6월 24일까지)_
  - [lesson-30](./lesson-30) (Routes + JSON)
    - /controllers/chatController.js + /controllers/pagesController.js `(2/2)`
    - /views/chat.ejs + /app.js `(2/2)`
    - /public/js/bookFunctions.js `(2/2)`
  - [lesson-31](./lesson-31) (apiRoutes + Bootstrap modal)
    - /routes/apiRoutes.js `(2/2)`
    - /models/Message.js `(2/2)`
    - /public/js/joinFunctions.js `(2/2)`
  - [lesson-32](./lesson-32) (CREATE + READ)
    - /controllers/chatController.js + /views/\_partials/\_footer.ejs `(2/2)`
    - /public/js/joinFunctions.js `(2/2)`
  - [lesson-33](./lesson-33) (추가한 코드 없음)
