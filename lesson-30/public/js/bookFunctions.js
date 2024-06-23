// public/js/modal.js
"use strict";

/**
 * Listing 26.6 (p. 388)
 * @TODO: modal.js에서 모달에 데이터 로딩을 위한 Ajax 함수
 */
$(document).ready(() => {
  /**
   * Listing 30.5 (p. 445)
   * socket.io를 취한 클라이언트 측 JavaScript 추가
   */
  const socket = io();

  $("#chat-form").submit(()=>{
    socket.emit("message");
    $("#caht-input"),val("");
    return false;
  });
  
  socket.on("message",(message)=> {
    disPlayMessage(message.content);
  });

  let disPlayMessage= message => {
    $("#chat").prepend(`<li>${message}</li>`);
  };

  $("#modal-button").click(() => {
    $(".modal-body").html("");
    $.get("/courses?format=json", (data) => {
      data.forEach((course) => {
        $(".modal-body").append(
          `<div>
            <span class="course-title">${course.title}</span>
            <div class="course-description">${course.description}</div>
            <button class="btn btn-info course-button" data-id="${course._id}">View</button>
          </div>`
        );
      });
    });
  });
});

/**
 * Listing 27.3 (p. 394)
 * bookFunctions.js에서 Ajax 호출의 수정
 */
$(document).ready(() => {
  let apiToken = $("#apiToken").data("token");

  console.log(apiToken);

  $("#modal-button").click(() => {
    $(".modal-body").html("");
    $.get(`/api/courses?apiToken=${apiToken}`, (results = {}) => {
      // 데이터 표현을 위한 로컬 변수 설정
      let data = results.data;

      // 데이터 객체가 강좌 정보를 포함하는지 체크
      if (!data || !data.courses) return;

      console.log(data.courses);

      // 데이터들을 푸프를 돌며 모달에 추가
      data.courses.forEach((course) => {
        console.log(course);
        $(".modal-body").append(
          `<div>
            <h4 class="course-title">${course.title}</h4>
            <p class="course-description">${course.description}</p>
            <button class="btn btn-info course-button 
              ${course.joined ? "joined-button" : "join-button"}" 
							data-id="${course._id}">
							${course.joined ? "Joined" : "Join"}
            </button>
          </div>`
        );
      });
    }).then(() => {
      // Ajax 요청이 완료된 후 버튼에 이벤트 리스너를 추가하기 위한 addJoinButtonListener 함수 호출
      addJoinButtonListener(); // @TODO: Listing 27.5 추가
    });
    $("#myModal").modal("show"); // Aaron
  });

  // Aaron
  $(".dismiss-modal").click(() => {
    $("#myModal").modal("hide");
  });
});

/**
 * Listing 27.5 (p. 397-398)
 * bookFunctions.js에서 각 버튼에 이벤트 리스너 추가
 */
// 모달 버튼을 위한 이벤트 리스너 생성
let addJoinButtonListener = () => {
  let apiToken = $("#apiToken").data("token");

  console.log(apiToken);

  $(".join-button").click((event) => {
    let $button = $(event.target),
      courseId = $button.data("id"); // 버튼과 버튼 ID 데이터 집아 놓기

    // 참가를 위해 강좌 ID로 Ajax 요청 만들기
    $.get(
      `/api/courses/${courseId}/join?apiToken=${apiToken}`,
      (results = {}) => {
        let data = results.data;

        console.log("Joining course", courseId);
        console.log(results);

        // 참가가 성공했는지 체크하고 버튼 변경
        if (data && data.success) {
          $button
            .text("Joined")
            .addClass("joined-button")
            .removeClass("join-button");
        } else {
          $button.text("Try again.");
          $button.after(
            `<em style="color: red; margin-left: 10px; padding-top: 2px;">${results.message}</em>`
          ); // Aaron
        }
      }
    );
  });
};
