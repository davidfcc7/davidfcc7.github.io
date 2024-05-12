const allLTab = document.querySelectorAll(".tab");
const allContent = document.querySelectorAll(".tab-content");

allLTab.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    // Borrar el tab active de todos los contenidos
    allContent.forEach((content) => {
      content.classList.remove("tab-active");
    });
    allContent[index].classList.add("tab-active");
  });
});