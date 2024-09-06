let inputWeight = document.querySelector("#innerText1");
let inputHeight = document.querySelector("#innerText2");
let submission = document.querySelector(".submit");
let results = document.querySelector("#bmi");
let xyz = document.querySelector("#abc");
let resultArea = document.querySelector(".category2");

const functioning = () => {
  let a = inputWeight.value;
  let b = inputHeight.value;
  let b1 = b * b;
  let resulting = a / b1;
  results.innerHTML = resulting;
  if (resulting <= 18.5) {
    xyz.innerHTML = "UnderWeight";
    xyz.style.color = "yellowgreen";
    resultArea.style.display = "inline-block";
  } else if (resulting >= 18.5 && resulting <= 24.9) {
    xyz.innerHTML = "Normal Weight";
    xyz.style.color = "green";
    resultArea.style.display = "inline-block";
  } else if (resulting >= 25.0 && resulting <= 29.9) {
    xyz.innerHTML = "Overweight";
    xyz.style.color = "yellow";
    resultArea.style.display = "inline-block";
  } else if (resulting >= 30.0) {
    xyz.innerHTML = "Obese";
    xyz.style.color = "red";
    resultArea.style.display = "inline-block";
  } else if (resulting >= 30.0 && resulting <= 34.9) {
    xyz.innerHTML = "Obese Class I";
    xyz.style.color = "red";
    resultArea.style.display = "inline-block";
  } else if (resulting >= 35.0 && resulting <= 39.9) {
    xyz.innerHTML = "Obese Class II";
    xyz.style.color = "red";
    resultArea.style.display = "inline-block";
  } else if (resulting >= 40) {
    xyz.innerHTML = "Obese Class III";
    xyz.style.color = "red";
    resultArea.style.display = "inline-block";
  }
};

submission.addEventListener("click", functioning);
