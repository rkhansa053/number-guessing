#!/usr/bin/env node 

import inquirer from "inquirer";

// Computer will generate a random number

// user input for guessing answers

// Compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);


const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    }
]);

console.log(answers);

 if(answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You have guessed right number.");
 }else{
    console.log("You guessed wrong number");
 }

