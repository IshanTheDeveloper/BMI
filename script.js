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
};

submission.addEventListener("click", functioning);
