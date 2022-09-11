const passwordButton = document.getElementById("password-generator");
const weatherButton = document.getElementById("weather-dashboard");

passwordButton.addEventListener("click", function(){
    window.open('https://nookworth.github.io/password-generator/', '_blank').focus();
});

weatherButton.addEventListener("click", function(){
    window.open('https://nookworth.github.io/weather-dashboard/', '_blank').focus();
});