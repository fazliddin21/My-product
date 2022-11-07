let elBody = document.querySelector("body");
let elDarkBtn = document.querySelector(".mode-btn");
let elLoginbtn = document.querySelector(".login");
let elLogo = document.querySelector(".logo");
let elImg = document.querySelector(".logo__img");

elDarkBtn.addEventListener("click", function () {
    elBody.classList.toggle("dark");
    elLogo.classList.toggle("logo");
   
});