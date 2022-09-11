const passwordButton = document.getElementById("password-generator");
const weatherButton = document.getElementById("weather-dashboard");
const movieButton = document.getElementById("quickflix");
const workButton = document.getElementById("workday-scheduler");

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

workButton.addEventListener("click", function () {
  window
    .open("https://nookworth.github.io/work-day-scheduler/", "_blank")
    .focus();
});
