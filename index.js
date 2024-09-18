var btnContainer = document.querySelectorAll("#nav-item");
var btn = btnContainer.getAttribute("data-tab");
var btnId = document.getElementById(btn);
var content = document.getElementsByClassName("content");

btnContainer.foreach(e => console.log(e));


