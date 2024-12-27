const inc = document.getElementById("inc");
const reset = document.getElementById("reset");
const dec = document.getElementById("dec");

let count = 0;
let result = document.getElementById("result");


function increase() {
  count = count + 1;
  result.innerHTML = count;
  if (count > 0)
    result.style.color = "green";
  else if (count = 0)
    result.style.color = "black";
}

function decrease() {
  count = count - 1;
  value = result;
  result.innerHTML = count;
  if (count < 0)
    result.style.color = "red";
  else if (count = 0)
    result.style.color = "black";
}

function res() {
  count = 0;
  result.style.color = "black";
  result.innerHTML = count;
}
