window.onload = diceRoll();

function diceRoll() {

  var randomNum;
  var randomNum2;

  var calc = Math.random(randomNum);
  calc = ((Math.floor(calc * 6) + 1));

  var calc2 = Math.random(randomNum2);
  calc2 = ((Math.floor(calc2 * 6) + 1));




  if (calc === 1) {
    document.querySelector(".img1").src = ("images/dice1.png");
  } else if (calc === 2) {
    document.querySelector(".img1").src = ("images/dice2.png");
  } else if (calc === 3) {
    document.querySelector(".img1").src = ("images/dice3.png");
  } else if (calc === 4) {
    document.querySelector(".img1").src = ("images/dice4.png");
  } else if (calc === 5) {
    document.querySelector(".img1").src = ("images/dice5.png");
  } else if (calc === 6) {
    document.querySelector(".img1").src = ("images/dice6.png");
  }


  if (calc2 === 1) {
    document.querySelector(".img2").src = ("images/dice1.png");
  } else if (calc2 === 2) {
    document.querySelector(".img2").src = ("images/dice2.png");
  } else if (calc2 === 3) {
    document.querySelector(".img2").src = ("images/dice3.png");
  } else if (calc2 === 4) {
    document.querySelector(".img2").src = ("images/dice4.png");
  } else if (calc2 === 5) {
    document.querySelector(".img2").src = ("images/dice5.png");
  } else if (calc2 === 6) {
    document.querySelector(".img2").src = ("images/dice6.png");
  }


  if (calc > calc2){

    document.querySelector("h1").innerHTML ="Player 1 Wins";
  }else if (calc === calc2){

        document.querySelector("h1").innerHTML ="Its a Tie";
  }

  else{
          document.querySelector("h1").innerHTML ="Player 2 Wins";
  }


}
