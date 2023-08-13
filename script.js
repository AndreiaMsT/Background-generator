const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const gradientBg = document.querySelector("body");
const cssBgCode = document.querySelector("h3");
const button = document.querySelector(".random");

function generateBackground() {
  gradientBg.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
  cssBgCode.innerHTML = `${gradientBg.style.background}; `;
}

function firstPageLoad() {
  color1.value = "#ff0000";
  color2.value = "#ffff00";
  generateBackground();
}
function generateRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function generateRandomBackground() {
  let randomColor1 = generateRandomColor();
  let randomColor2 = generateRandomColor();

  if (randomColor1.length < 6) {
    randomColor1 = generateRandomColor;
  }
  if (randomColor2.length < 6) {
    randomColor2 = generateRandomColor();
  }

  color1.value = "#" + randomColor1;
  color2.value = "#" + randomColor2;
  generateBackground();
}

firstPageLoad();

color1.addEventListener("input", generateBackground);
color2.addEventListener("input", generateBackground);
button.addEventListener("click", generateRandomBackground);
