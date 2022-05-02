var pElements = document.querySelectorAll("p");

var emptyArray = [];

for (var i = pElements.length - 1; i >= 0; i--) {
  var pElement = pElements[i];

  emptyArray.push(pElement);
}

document.getElementsByClassName("about")[0].innerHTML = "";

var pAppend = document.getElementsByClassName("about")[0];

for (let i = 0; i < emptyArray.length; i++) {
  const test = emptyArray[i];
  pAppend.appendChild(test);
}
