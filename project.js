//1. Deposit some money
//2. Determine number of line to bet on
//3. Collet a bet amount
//4. Spin the slot machine
//5. Check if the user won
//6. Give the user their winnings
//7. Play Again

//npm init
//npm i prompt-sync
//npm node project.js  

// function deposit(){
//     
// }

//1
const prompt = require('prompt-sync')();

const deposit = () => {
    while(true){
        const depositAmount = prompt('Enter a deposit amount: ');
        const numberDepositAmount = parseFloat(depositAmount); //parseFloat converts the answer to a number

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log('Invalid deposit amount, try again.');
        } else {
            return numberDepositAmount;
        }
    }
};

//2
const getNumberOfLines = () => {
    while(true){
        const lines = prompt('Enter the number of lines to bet on (1-3): ');
        const numberOfLines = parseFloat(lines); //parseFloat converts the answer to a number

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log('Invalid number of lines, try again.');
        } else {
            return numberOfLines;
        }
    }
};

//3
const getBet = (balance, lines) => {
    while(true){
        const bet = prompt('Enter the bet per line: ');
        const numberBet = parseFloat(bet); //parseFloat converts the answer to a number

        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines){
            console.log('Invalid bet, try again.');
        } else {
            return numberBet;
        }
    }
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, lines);


 