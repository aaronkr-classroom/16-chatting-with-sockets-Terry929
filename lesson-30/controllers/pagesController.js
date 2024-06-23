// homeController.js
"use strict";

/**
 * Listing 12.5 (p. 178)
 * 홈 컨트롤러로의 라우팅
 */
module.exports = {
  showHome: (req, res) => {
    res.render("index", {
      page: "home",
      title: "Home",
    });
  },
  showAbout: (req, res) => {
    res.render("_pages/about", {
      page: "about",
      title: "About",
    });
  },
  showTransportation: (req, res) => {
    res.render("_pages/transportation", {
      page: "transportation",
      title: "Transportation",
    });
  },
  /**
   * Listing 30.2
   * chat 액션 추가
   */
  chat: (req,res) => {
    res.render("chat", {
      page:"chat",
      title: "Chat"
    });
  }
};
