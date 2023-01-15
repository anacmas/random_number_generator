let number = document.querySelector(".number");
let button = document.querySelector(".button-generate");

button.addEventListener("click", generateNumber);

function generateNumber() {
  number.innerHTML = parseInt(Math.random() * 100 + 1);
}
