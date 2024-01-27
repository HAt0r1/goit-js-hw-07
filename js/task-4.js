const form = document.querySelector(".login-form");

function submitHandler(event) {
  event.preventDefault();
  const data = {
    email: event.target.elements.email.value.trim(),
    password: event.target.elements.password.value.trim(),
  };
  if (data.email === "" || data.password === "") {
    console.log("Ooops. Your fields must be filled in");
  } else {
    console.log(data);
  }
}

form.addEventListener("submit", submitHandler);
