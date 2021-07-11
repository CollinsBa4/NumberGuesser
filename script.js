let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

let isUserClosest = false
let isComputerClosest = false
    // Write your code below:

let generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

let compareGuesses = (user_guess, computer_guess, secret_target) => {
    userDiff = secret_target - user_guess;
    compDiff = secret_target - computer_guess;
    if (userDiff > compDiff) {
        return false;
    } else if (userDiff < compDiff) {
        return true;
    } else {
        return true;
    }
}

let updateScore = bool => {
    bool === 'human' ? humanScore++ : computerScore++
}

let advanceRound = () => {
    return currentRoundNumber++;
}