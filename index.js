const winsEl = document.querySelector("#wins");
const lossesEl = document.querySelector("#losses");
const guessesEl = document.querySelector("#guesses");
const guessedEl = document.querySelector("#guessed");
const gameStats = {
  wins: 0,
  losses: 0,
  guesses: 10,
  guessed: [],
};
let { wins, losses, guesses, guessed } = gameStats;

function generateRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function reset() {
  guesses = 10;
  guessed = [];
  letterToGuess = generateRandomLetter();
  guessesEl.innerText = guesses;
  guessedEl.innerText = guessed;
}

let letterToGuess = generateRandomLetter();
document.addEventListener("keyup", (e) => {
  if (letterToGuess === e.key) {
    wins++;
    winsEl.innerText = wins;
    reset();
  } else {
    guesses--;
    guessesEl.innerText = guesses;
    guessed.push(e.key);
    guessedEl.innerText = guessed.join(" ").toUpperCase();
  }
  if (guesses === 0) {
    losses++;
    lossesEl.innerText = losses;
    reset();
  }
});
