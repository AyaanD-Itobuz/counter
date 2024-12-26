// alert("hi")

let result = document.getElementById("result");
const inc = document.getElementById("inc");
const reset = document.getElementById("reset");
const dec = document.getElementById("dec");

let count = 0;

console.log(result);

function increase() {
  count = count + 1;
  result.innerHTML = count;
  if (count > 0)
    result.style.color = "green";
  else if (count = 0)
    result.style.color = "black";
  console.log(count);
}

function decrease() {
  count = count - 1;
  value = result;
  result.innerHTML = count;
  if (count < 0)
    result.style.color = "red";
  else if (count = 0)
    result.style.color = "black";

  console.log(count);
}

function res() {
  count = 0;
  result.style.color = "black";
  result.innerHTML = count;
  console.log(count);
}
