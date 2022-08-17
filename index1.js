function adduser(e) {
  e.preventDefault();
  let Email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let getUser = JSON.parse(localStorage.getItem("user"));

  let userfilter = getUser.find(
    (e) => Email == e.email && password == e.password
  );
  let user = document.getElementById("user");
  console.log(e, userfilter);
  if (userfilter) {
    window.location.href = "html.html";
  } else {
    alert("wrong");
  }
}
