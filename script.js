function checkLogin(event) {
  event.preventDefault();

  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  if (login === "aaa" && password === "bbb") {
    window.location.href = "kontraktacja.html";
  } else {
    alert("Coś poszło nie tak, spróbuj ponownie.");
  }
}
