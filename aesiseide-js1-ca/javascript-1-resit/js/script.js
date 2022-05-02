fetch("https://v2.jokeapi.dev/joke/Any?type=twopart")
  .then((response) => response.json())
  .then((jsoned) => {
    if (jsoned.error) {
      document.querySelector("h2").innerHTML = jsoned.message;
    } else {
      var setupElement = document.getElementsByClassName("setup")[0];
      var punchlineElement = document.getElementsByClassName("punchline")[0];

      setupElement.innerHTML = jsoned.setup;
      punchlineElement.innerHTML = jsoned.delivery;

      document.querySelector("title").innerText = jsoned.setup;
    }
  })

  .catch(function (error) {
    console.log(error);
  });
