function register(element) {
  const username = element.children.username.value;
  const password = element.children.password.value;
  const passwordConfimation = element.children.confirmationPassword.value;

  if (password === passwordConfimation) {
    alert("usuario " + username + " registrado");
  } else {
    alert("senha incorreta");
  }
}
