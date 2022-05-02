var dynamicDivs = document.getElementsByClassName("dynamic-divs")[0];

function getInputValue(input) {
  var inputValue = input.value;

  document.getElementsByClassName("dynamic-divs")[0].innerHTML = "";

  for (let i = 1; i <= inputValue; i++) {
    var div = document.createElement("div");
    div.innerText = "Number " + i;

    dynamicDivs.appendChild(div);
  }
}

function Reset() {
  dynamicDivs.innerHTML = "";
  document.querySelector("input[type=number]").value = "0";
}
