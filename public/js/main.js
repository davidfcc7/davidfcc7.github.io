"use strict";

var allLTab = document.querySelectorAll(".tab");
var allContent = document.querySelectorAll(".tab-content");
allLTab.forEach(function (tab, index) {
  tab.addEventListener("click", function () {
    // Borrar el tab active de todos los contenidos
    allContent.forEach(function (content) {
      content.classList.remove("tab-active");
    });
    allContent[index].classList.add("tab-active");
  });
});
//# sourceMappingURL=main.js.map
