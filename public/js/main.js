"use strict";var allLTab=document.querySelectorAll(".tab"),allContent=document.querySelectorAll(".tab-content");allLTab.forEach(function(t,a){t.addEventListener("click",function(){allContent.forEach(function(t){t.classList.remove("tab-active")}),allContent[a].classList.add("tab-active")})});
//# sourceMappingURL=main.js.map
