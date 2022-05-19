/*functions
1. take guess from input and compare it to random number
2. if number is wrong, deduct point from score
3.if number is too low, display 'too low'
4.if number is too high, display 'too high'
5.if number is correct, display win screen
6. after pressing 'again' game is reset except for high score
7. highscore value equals the highest score value
*/

const againBtn = document.querySelector(".again");
const number = document.querySelector(".number");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const Score = document.querySelector(".score");
const guess = document.querySelector(".guess");
const highScoreEl = document.querySelector(".highscore");
const body = document.querySelector("body");

let randomNumber = pickRandomnumber();
let playerScore = 20;
let highScore = 0;

checkBtn.addEventListener("click", () => {
  const playerGuess = Number(document.querySelector(".guess").value);
  if (!playerGuess) {
    message.innerHTML = "not a number!";
  } else if (playerGuess === randomNumber) {
    message.innerHTML = "congratulations!";
    body.style.backgroundColor = "green";
    number.innerHTML = randomNumber;
    if (playerScore > highScore) {
      highScore = playerScore;
      highScoreEl.innerHTML = playerScore;
      console.log("highScore");
    }
  }
  if (playerScore > 1) {
    if (playerGuess > randomNumber) {
      message.innerHTML = "too high";
      playerScore--;
      Score.innerHTML = playerScore;
    } else if (playerGuess < randomNumber) {
      message.innerHTML = "too low";
      playerScore--;
      Score.innerHTML = playerScore;
    }
  } else {
    message.innerHTML = "Sorry! You Lost the Game!";
  }
});

againBtn.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  message.innerHTML = "Start guessing...";
  guess.value = "";
  playerScore = 20;
  Score.innerHTML = playerScore;
  number.innerHTML = "?";
  randomNumber = pickRandomnumber();
});
function pickRandomnumber() {
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  return randomNumber;
}
