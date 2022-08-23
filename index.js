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
    .post("http://localhost:3000/signup", {
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
    .post("http://localhost:3000/login", {
      email,
      password,
    })
    .then(function (response) {
      console.log(response.data);
      document.querySelector("#message1").innerHTML = response.data.message;
    })
    .catch(function (error) {
      console.log("dsabedwb", error.response.data);
      document.querySelector("#message1").innerHTML =
        error.response.data.message;
    });
}
