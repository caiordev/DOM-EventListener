const form = document.getElementById("orderForm");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const name = document.querySelector('input[name="name"]').value;
  const address = document.querySelector('input[name="address"').value;
  const breadType = document.querySelector('select[name="breadType"]').value;
  const main = document.querySelector('input[name="main"]').value;
  const observation = document.querySelector('textarea[nome="obs"]').value;

  let salad = "";
  document.querySelector('input[name="salada"]:checked').forEach((element) => {
    salad += " - " + element.value + "\n";
  });
});
