#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let my_balance = 10000;
let my_pin = 2345;
console.log(chalk.blackBright.bold.bgWhiteBright("\n\t\t****************************  Welcome to alihahmi2288_Atm_Machine  *****************************"));
console.log(chalk.cyanBright.bold(`\nYour Balance is ${my_balance}\n`));
let pin_ans = await inquirer.prompt({
    name: "pin",
    message: "Enter your Pin",
    type: "number",
});
if (my_pin == pin_ans.pin) {
    console.log(chalk.yellow("Correct Pin\n"));
    let operation_ans = await inquirer.prompt({
        name: "operation",
        type: "list",
        message: chalk.whiteBright.bold("What would you like to do?\n"),
        choices: ["Withdraw", "Deposit", "Fast Cash", "Exit"],
    });
    if (operation_ans.operation == "Withdraw") {
        let withdraw_ans = await inquirer.prompt({
            name: "withdraw",
            message: chalk.whiteBright("How much would you like to withdraw?"),
            type: "number",
        });
        if (withdraw_ans.withdraw > my_balance) {
            console.log(chalk.redBright.bold("Insufficient Balance"));
        }
        else {
            my_balance = my_balance - withdraw_ans.withdraw;
            console.log(chalk.green.bold(`Your Remaining Balance is ${my_balance}`));
        }
    }
    else if (operation_ans.operation == "Deposit") {
        let deposit_ans = await inquirer.prompt({
            name: "deposit",
            message: chalk.whiteBright("How much would you like to deposit?"),
            type: "number",
        });
        my_balance = my_balance + deposit_ans.deposit;
        console.log(chalk.green.bold(`Your Remaining Balance is ${my_balance}`));
    }
    else if (operation_ans.operation == "Fast Cash") {
        let fastcash_ans = await inquirer.prompt({
            name: "fastcash",
            message: "How much would you like to withdraw?",
            type: "list",
            choices: ["500", "1000", "2000", "5000"],
        });
        my_balance = my_balance - fastcash_ans.fastcash;
        console.log(chalk.green(`Your Remaining Balance is ${my_balance}`));
    }
    else if (operation_ans.operation == "Exit") {
        console.log("Thank you for using ATM Machine");
    }
}
else {
    console.log(chalk.redBright.bold("Incorrect Pin"));
}
