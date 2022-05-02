function validateForm() {
  var firstName = document.getElementById("firstName");
  var firstNameError = document.querySelector(".form-error-firstName");
  var lastNameError = document.querySelector(".form-error-lastName");
  var emailError = document.querySelector(".form-error-email");
  var subjectError = document.querySelector(".form-error-subject");
  var messageError = document.querySelector(".form-error-message");

  if (firstName.value.length == 0) {
    firstNameError.style.display = "block";

    return 0;
  } else {
    firstNameError.style.display = "none";
  }

  var lastName = document.getElementById("lastName");

  if (lastName.value.length < 3) {
    lastNameError.style.display = "block";

    return 0;
  } else {
    lastNameError.style.display = "none";
  }

  var email = document.getElementById("Email");

  if (!filter.test(email.value)) {
    emailError.style.display = "block";

    return 0;
  } else {
    emailError.style.display = "none";
  }

  var subject = document.getElementById("subject");

  if (subject.value.length < 7) {
    subjectError.style.display = "block";

    return 0;
  } else {
    subjectError.style.display = "none";
  }

  var message = document.getElementById("message");

  if (message.value.length < 15) {
    messageError.style.display = "block";

    return 0;
  } else {
    subjectError.style.display = "none";
  }
}
