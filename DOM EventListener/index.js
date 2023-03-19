function register(ev) {
  console.log(ev);
  const sectionElement = ev.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.chilldren.password.value;
  const passwordConfimation = sectionElement.children.passwordConfimation.value;

  if (password === passwordConfimation) {
    alert("usuario " + username + " registrado!");
  } else {
    alert("senha errada");
  }
}
const button = document.getElementById("register-button");
button.addEventListener("click", register);

function removeEvent() {
  button.removeEventListener("click", register);
  alert("Event Removed");
}

button.addEventListener("mouseover", function (ev) {
  console.log(ev);
});
