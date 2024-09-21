const rollBtn = document.getElementById("rollBtn");
const scoreEl = document.getElementById("scoreEl");
const player1TotalScore = document.getElementById("player-1-totolScore");
const player2TotalScore = document.getElementById("player-2-totolScore");
const imgsEl = document.getElementById("images");
const rollDiceBtnEl = document.getElementById("roll-dice");
const player1Current = document.getElementById("player-1-current");
const player2Current = document.getElementById("player-2-current");
const holdBtn = document.getElementById("hold");
const newGameBtn = document.getElementById("new-game");

// add listener to button

let player1 = "player1";
let player2 = "player2";
let current1 = 0;
let current2 = 0;
let current = player1;

function Player() {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  const img = document.createElement("img");
  img.style.width = "90px";
  if (current === "player1") {
    switch (randomNum) {
      case 1:
        img.src = "./img/dice-1.png";
        imgsEl.innerHTML = "";
        imgsEl.appendChild(img);
        current1 = 0;
        player1Current.innerHTML = "Current: <br/> " + current1;
        break;
      case 2:
        img.src = "./img/dice-2.png";
        imgsEl.innerHTML = "";
        imgsEl.appendChild(img);
        current1 = current1 + randomNum;
        player1Current.innerHTML = "Current: <br/> " + current1;
        break;
      case 3:
        img.src = "./img/dice-3.png";
        imgsEl.innerHTML = "";
        imgsEl.appendChild(img);
        current1 = current1 + randomNum;
        player1Current.innerHTML = "Current: <br/> " + current1;
        break;
      case 4:
        img.src = "./img/dice-4.png";
        imgsEl.innerHTML = "";
        imgsEl.appendChild(img);
        current1 = current1 + randomNum;
        player1Current.innerHTML = "Current: <br/> " + current1;
        break;
      case 5:
        img.src = "./img/dice-5.png";
        imgsEl.innerHTML = "";
        imgsEl.appendChild(img);
        current1 = current1 + randomNum;
        player1Current.innerHTML = "Current: <br/> " + current1;
        break;
      case 6:
        img.src = "./img/dice-6.png";
        imgsEl.innerHTML = "";
        imgsEl.appendChild(img);
        current1 = current1 + randomNum;
        player1Current.innerHTML = "Current: <br/> " + current1;
        break;
      default:
        img.src = "./img/dice-1.png";
        break;
    }
  } else if (current === "player2") {
    switch (randomNum) {
      case 1:
        img.src = "./img/dice-1.png";
        imgsEl.innerHTML = "";
        imgsEl.appendChild(img);
        current2 = 0;
        player2Current.innerHTML = "Current: <br/> " + current2;
        break;
      case 2:
        img.src = "./img/dice-2.png";
        imgsEl.innerHTML = "";
        imgsEl.appendChild(img);
        current2 = current2 + randomNum;
        player2Current.innerHTML = "Current: <br/> " + current2;
        break;
      case 3:
        img.src = "./img/dice-3.png";
        imgsEl.innerHTML = "";
        imgsEl.appendChild(img);
        current2 = current2 + randomNum;
        player2Current.innerHTML = "Current: <br/> " + current2;
        break;
      case 4:
        img.src = "./img/dice-4.png";
        imgsEl.innerHTML = "";
        imgsEl.appendChild(img);
        current2 = current2 + randomNum;
        player2Current.innerHTML = "Current: <br/> " + current2;
        break;
      case 5:
        img.src = "./img/dice-5.png";
        imgsEl.innerHTML = "";
        imgsEl.appendChild(img);
        current2 = current2 + randomNum;
        player2Current.innerHTML = "Current: <br/> " + current2;
        break;
      case 6:
        img.src = "./img/dice-6.png";
        imgsEl.innerHTML = "";
        imgsEl.appendChild(img);
        current2 = current2 + randomNum;
        player2Current.innerHTML = "Current: <br/> " + current2;
        break;
      default:
        img.src = "./img/dice-1.png";
        break;
    }
  }
}
rollDiceBtnEl.addEventListener("click", Player);

// function hold
let totalPlayer1 = 0;
let totalPlayer2 = 0;
holdBtn.addEventListener("click", () => {
  if (current === player1) {
    if (totalPlayer1 >= 100) {
      alert("Player 1 Won 🎆🎇🎈");
    } else {
      totalPlayer1 = parseInt(totalPlayer1) + parseInt(current1);
      player1TotalScore.innerText = totalPlayer1;
      current1 = 0;
      player1Current.innerHTML = "Current: <br /> " + current1;
      current = player2;
    }
  } else {
    if (totalPlayer2 >= 100) {
      alert("Player 2 Won 🎆🎇🎈");
    } else {
      totalPlayer2 = parseInt(totalPlayer2) + parseInt(current2);
      player2TotalScore.innerText = totalPlayer2;
      current2 = 0;
      player2Current.innerHTML = "Current: <br /> " + current2;
      current = player1;
    }
  }
});

// function new game
newGameBtn.addEventListener("click", () => {
  location.reload();
});
