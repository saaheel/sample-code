let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function setGradient(params) {
    body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
    css.textContent = body.style.background + ";"
    // textContent add text to DOM
}

// color1.addEventListener('input', setGradient)
// Different way to do
color2.addEventListener('input', setGradient)
