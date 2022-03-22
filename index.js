const winsEl = document.querySelector("#wins");
const lossesEl = document.querySelector("#losses");
const guessesEl = document.querySelector("#guesses");
const guessedEl = document.querySelector("#guessed");
const gameStats = {
  wins: 0,
  losses: 0,
  guesses: 10,
  guessed: [],
  letterToGuess: generateRandomLetter(),
};
let { wins, losses, guesses, guessed, letterToGuess } = gameStats;

function generateRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function reset() {
  guesses = 10;
  guessesEl.innerText = guesses;
  guessed = [];
  guessedEl.innerText = guessed;
  letterToGuess = generateRandomLetter();
}

document.addEventListener("keyup", (e) => {
  if (letterToGuess === e.key) {
    wins++;
    winsEl.innerText = wins;
    reset();
  } else if (guesses === 0) {
    losses++;
    lossesEl.innerText = losses;
    reset();
  } else {
    guesses--;
    guessesEl.innerText = guesses;
    guessed.push(e.key);
    guessedEl.innerText = guessed.join(" ").toUpperCase();
  }
});
