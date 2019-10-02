import compareNumbers from './compare-numbers.js'

const correctNumber = 5;

const userNumber = document.getElementById('user-number');

const guessButton = document.getElementById('guess-button');

const attemptsRemaining = document.getElementById('remaining-guesses');
const popUpString = document.getElementById('pop-up-string');

let attempts = 4;

guessButton.addEventListener('click', () => {

    attempts = attempts - 1;
    console.log(attempts);
    let userGuess = userNumber.value;
    console.log(userGuess);

    attemptsRemaining.textContent = attempts;
    console.log(compareNumbers(userGuess, correctNumber));

    userGuess = Number(userGuess);    

    let result = compareNumbers(userGuess, correctNumber);

    if (result === 0) {
        popUpString.textContent = 'You Win!';
        guessButton.disabled = true;
    } else if (attempts === 0) {
        guessButton.disabled = true;
        popUpString.textContent = 'Out of Turns';
    } else if (result === 1) {
        popUpString.textContent = 'Guess is too high';
    } else if (result === -1) {
        popUpString.textContent = 'Guees is too low';
    } 
});
// 

//const compareNumbers = (attempts) => (
   // if (a

