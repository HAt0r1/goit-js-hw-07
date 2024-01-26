function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxContainer = document.getElementById("boxes");
const addBtn = document.querySelector("[data-create]");
const removeBtn = document.querySelector("[data-destroy]");

function createBoxes(amount) {
  for (let i = 0; i < amount; ++i) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxContainer.append(box);
  }
}

function destroyBoxes() {
  if (boxContainer.children) {
    boxContainer.innerHTML = "";
  }
}

function controlsHandler() {
  const input = document.querySelector("input");
  const amount = parseFloat(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Please pick in range 1 to 100");
  }
}

addBtn.addEventListener("click", controlsHandler);
removeBtn.addEventListener("click", destroyBoxes);
