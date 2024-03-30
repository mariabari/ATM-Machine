#! /usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 100000; // dollors
let myId = "mariabari";
let myPin = 1234;
let idAnswer = await inquirer.prompt([
    {
        name: "id",
        message: "Enter your user id : ",
        type: "string",
    },
]);
// conditions 
if (idAnswer.id === myId) {
    console.log("Correct user id ");
    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter pin code : ",
            type: "number"
        }
    ]);
    if (pinAnswer.pin === myPin) {
        console.log("correct pin code");
        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "Please select operation",
                type: "list",
                choices: ["withdraw", "check balance", "fast cash"]
            }
        ]);
        if (operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number"
                }
            ]);
            // =, -=, +=
            if (amountAns.amount > myBalance) {
                console.log("Insufficient balance. Transaction cannot be completed.");
            }
            else {
                myBalance -= amountAns.amount;
                console.log("congratulations , transaction successful");
                console.log("Your current balance is : " + ` ${myBalance} `);
            }
        }
        else if (operationAns.operation === "check balance") {
            console.log("your balance is: " + ` ${myBalance}`);
        }
        else if (operationAns.operation === "fast cash") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "select your amount",
                    type: "list",
                    choices: ["1000", "5000", "10000", "20000", "50000"]
                },
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient balance. Transaction cannot be completed.");
            }
            else
                myBalance -= amountAns.amount;
            console.log("Your current balance is " + myBalance);
        }
    }
    else {
        console.log("invalid pin code");
    }
}
else {
    console.log("invalid user id");
}
