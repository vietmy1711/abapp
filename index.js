function getResult() {
  var randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber == 0) {
    document.querySelector("h1").innerHTML = "Khồnggg!";
  } else {
    document.querySelector("h1").innerHTML = "Điiiii!";
  }
}
