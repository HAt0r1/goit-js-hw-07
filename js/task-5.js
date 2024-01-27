function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const colorText = document.querySelector(".color");
function getRandomColorToBody() {
  const randomColorValue = getRandomHexColor();
  body.style.backgroundColor = randomColorValue;
  colorText.textContent = randomColorValue;
}

document
  .querySelector(".change-color")
  .addEventListener("click", getRandomColorToBody);
