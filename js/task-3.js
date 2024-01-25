const inputArea = document.getElementById("name-input");

function inputHandler(event) {
  const outputArea = document.getElementById("name-output");
  const inputValue = event.target.value.trim();

  if (inputValue) {
    outputArea.textContent = inputValue;
  } else if (inputValue === "") {
    outputArea.textContent = "Anonymous";
  }
}

inputArea.addEventListener("input", inputHandler);
