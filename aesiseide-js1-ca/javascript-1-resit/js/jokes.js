fetch("https://v2.jokeapi.dev/joke/Any?type=twopart&amount=10")
  .then((response) => response.json())
  .then((jsoned) => {
    var setupResults = document.getElementsByClassName("results")[0];

    if (jsoned.error) {
      document.querySelector("h1").innerHTML = jsoned.message;
    } else {
      for (let i = 0; i < 5; i++) {
        var joke = jsoned.jokes[i];
        console.log(joke.setup);
        var clonedJoke = document.getElementById("sampleJokes").cloneNode(true);
        clonedJoke.removeAttribute("id");
        clonedJoke.classList.remove("d-none");
        clonedJoke.querySelector(".type").innerHTML = joke.type;
        clonedJoke.querySelector(".setup").innerHTML = joke.setup;
        clonedJoke.querySelector(".punchline").innerHTML = joke.delivery;
        setupResults.appendChild(clonedJoke);
        if (i + 1 == 3) {
          document.querySelector("title").innerText = joke.setup;
        }
      }

      var loaderElement = document.getElementsByClassName("loader")[0];
      loaderElement.classList.add("d-none");
    }
  })
  .catch(function (error) {
    document.querySelector("h1").innerHTML = error.message;
    console.log(error);
  });
