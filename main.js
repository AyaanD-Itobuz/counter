let result = document.getElementById("result");
let count = 0;


function increase() {
  count += 1;
  result.innerHTML = count;
  if (count > 0)
    result.style.color = "green";
  else if (count === 0)
    result.style.color = "black";
}

function decrease() {
  count -= 1;
  result.innerHTML = count;
  if (count < 0)
    result.style.color = "red";
  else if (count === 0)
    result.style.color = "black";
}

function res() {
  count = 0;
  result.style.color = "black";
  result.innerHTML = count;
}
