function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetWindow = document.querySelector(".widget");
const colorText = document.querySelector(".color");
function randomColor() {
  widgetWindow.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
  console.log(colorText);
}

widgetWindow.addEventListener("click", randomColor);
