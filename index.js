function signup() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var repeatPassword = document.getElementById("confirm-password").value;

  if (password !== repeatPassword) {
    document.querySelector("#message").innerHTML =
      "Passwords do not match, please try again";
    return;
  }

  axios
    .post("https://login-signup-123.herokuapp.com/signup", {
      firstName,
      lastName,
      email,
      password,
    })
    .then(function (response) {
      document.querySelector("#message").innerHTML = response.data.message;
    })
    .catch(function (error) {
      document.querySelector("#message").innerHTML =
        error.response.data.message;
    });
}

function login(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  axios
    .post("https://login-signup-123.herokuapp.com/login", {
      email,
      password,
    })
    .then(function (response) {
      console.log(response.data);
      document.querySelector("#message1").innerHTML = response.data.message;
    })
    .catch(function (error) {
      console.log(error.response.data);
      document.querySelector("#message1").innerHTML =
        error.response.data.message;
    });
}
