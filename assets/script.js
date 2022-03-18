// Function to get a random letter
const generateRandomLetter = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}
const resetGame = () => {
  guessedLetters = [];
  guessedLettersDiv.textContent = guessedLetters;
  guessesRemaining = 10;
  guessesRemainingDiv.textContent = guessesRemaining;
  randomLetter = generateRandomLetter()
}
const collectGuesses = (userGuess) => {
  guessedLetters.push(userGuess);
  guessedLettersDiv.textContent = guessedLetters
    .join(", ")
    .toUpperCase();
}

// Variables
let randomLetter = generateRandomLetter();
let guessedLetters = [];
let wins = 0;
let losses = 0;
let guessesRemaining = 10;
const guessesRemainingDiv = document.querySelector("#guesses")
const winsDiv = document.querySelector("#wins")
const lossesDiv = document.querySelector("#losses")
const guessedLettersDiv = document.querySelector("#guessed")

// DOM 
guessesRemainingDiv.textContent = guessesRemaining;
winsDiv.textContent = wins;
lossesDiv.textContent = losses;

// Event Listener
document.addEventListener("keyup", (e) => {
  let userGuess = e.key;
  collectGuesses(userGuess)
  if (userGuess === randomLetter) {
    wins++;
    winsDiv.textContent = wins;
    resetGame()
  } else if (guessesRemaining === 0) {
    losses++;
    lossesDiv.textContent = losses;
    resetGame()
  } else {
    guessesRemaining--;
    guessesRemainingDiv.textContent = guessesRemaining;
  }
});
