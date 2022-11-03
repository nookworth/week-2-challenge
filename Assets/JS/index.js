const passwordButton = document.getElementById("password-generator");
const weatherButton = document.getElementById("weather-dashboard");
const movieButton = document.getElementById("quickflix");
const dndButton = document.getElementById("dnd-meetups");

passwordButton.addEventListener("click", function () {
  window
    .open("https://nookworth.github.io/password-generator/", "_blank")
    .focus();
});

weatherButton.addEventListener("click", function () {
  window
    .open("https://nookworth.github.io/weather-dashboard/", "_blank")
    .focus();
});

movieButton.addEventListener("click", function () {
  window.open("https://mich-hales.github.io/QuickFlix/", "_blank").focus();
});

dndButton.addEventListener("click", function () {
  window
    .open("https://frozen-meadow-34344.herokuapp.com/", "_blank")
    .focus();
});
