function ChooseOpt(num) {
  const opt = Math.floor(Math.random() * 3) + 1;
  let myopt = window.document.getElementById("myOpt");
  let enemyopt = window.document.querySelector("#enemyOpt");
  let result = window.document.querySelector("#result");

  console.log(num, opt);

  switch (num) {
    case 1:
      myopt.src = "./assets/img/Rock.png";
      break;
    case 2:
      myopt.src = "./assets/img/Scissor.png";
      break;
    case 3:
      myopt.src = "./assets/img/Paper.png";
      break;
  }

  switch (opt) {
    case 1:
      enemyopt.src = "./assets/img/Rock.png";
      break;
    case 2:
      enemyopt.src = "./assets/img/Scissor.png";
      break;
    case 3:
      enemyopt.src = "./assets/img/Paper.png";
      break;
  }

  if (num + 1 == opt) {
    result.innerHTML = "Vitoria!";
    result.style = "color: yellow;";
  } else if (num == 3 && num != opt) {
    if (opt == 1) {
      result.innerHTML = "Vitoria!";
      result.style = "color: yellow;";
    } else {
      result.innerHTML = "Derrota!";
      result.style = "color: red;";
    }
  } else if (num == opt) {
    result.innerHTML = "Empate!";
    result.style = "color: white;";
  } else {
    result.innerHTML = "Derrota!";
    result.style = "color: red;";
  }
}
