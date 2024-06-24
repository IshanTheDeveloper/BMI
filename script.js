let inputWeight = document.querySelector("#innerText1");
let inputHeight = document.querySelector("#innerText2");
let submission = document.querySelector(".submit");
let results = document.querySelector("#bmi");
let xyz = document.querySelector("#abc");

const functioning = () => {
  let a = inputWeight.value;
  let b = inputHeight.value;
  let b1 = b * b;
  let resulting = a / b1;
  results.innerHTML = resulting;
  if (resulting <= 18.5) {
    xyz.innerHTML = "Normal";
  } else if (resulting >= 18.5 && resulting <= 24.9) {
    xyz.innerHTML = "Normal Range";
  } else if (resulting >= 25.0 && resulting <= 29.9) {
    xyz.innerHTML = "Overweight";
  } else if (resulting >= 30.0) {
    xyz.innerHTML = "Obese";
  } else if (resulting >= 30.0 && resulting <= 34.9) {
    xyz.innerHTML = "Obese Class I";
  } else if (resulting >= 35.0 && resulting <= 39.9) {
    xyz.innerHTML = "Obese Class II";
  } else if (resulting >= 40) {
    xyz.innerHTML = "Obese Class III";
  }
};

submission.addEventListener("click", functioning);
