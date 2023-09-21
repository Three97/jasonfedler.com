function togglePasswordVisibility() {
  const pwInput = document.getElementById("mainpw");
  if (pwInput.type === "password") {
    pwInput.type = "text";
  } else {
    pwInput.type = "password";
  }
}