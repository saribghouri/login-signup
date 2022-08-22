function getAllUser() {
  axios
    .get("http://localhost:3000/users")
    .then(function (response) {
      console.log(response.data);

      response.data.map((eachUser) => {
        document.querySelector(
          "#allUser"
        ).innerHTML += `${eachUser.firstName} ${eachUser.lastName} - ${eachUser.email} <br>`;
      });
    })
    .catch(function (error) {
      console.log(error.response.data);
      document.querySelector("#message").innerHTML =
        error.response.data.message;
    });
}
getAllUser();

function signup() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var repeatPassword = document.getElementById("repeatPassword").value;

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
      console.log(response.data);
      document.querySelector("#message").innerHTML = response.data.message;
    })
    .catch(function (error) {
      console.log(error.response.data);
      document.querySelector("#message").innerHTML =
        error.response.data.message;
    });
}
