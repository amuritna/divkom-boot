// dark/light mode buttons
const buttonLight = document.getElementById("button-light")
const buttonDark = document.getElementById("button-dark");

// JavaScript enabled
buttonDark.innerText = "DARK MODE";

// control dark/light mode
const ultimateContainer = document.getElementById("ultimate-container");

// dark mode
function darkMode() {
    ultimateContainer.className = "box-dark";
    buttonDark.style.display = "none";
    buttonLight.style.display = "block";
}

// light mode
function lightMode() {
    ultimateContainer.className = "box-light";
    buttonDark.style.display = "block";
    buttonLight.style.display = "none";
}