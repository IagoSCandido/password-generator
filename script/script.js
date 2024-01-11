let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%&*";
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  let generatedPassword = "";
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    generatedPassword += charset.charAt(Math.floor(Math.random() * n));
  }
  console.log(generatedPassword);
  containerPassword.classList.remove("hide");
  password.innerHTML = generatedPassword;
  newPassword = generatedPassword;
}

function copyPassword() {
  navigator.clipboard.writeText(newPassword);
  alert("password copied to clipboard");
}
