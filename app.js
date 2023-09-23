import inquirer from "inquirer";
import showBanner from "node-banner";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 100) + 1;
let tries = 0;
async function playGame() {
    console.log(chalk.bold.bgRgb(71, 39, 180)("\n\nA random number between 1-100 is generated! "));
    console.log(chalk.bold.rgb(71, 39, 180).underline("Let see in how many tries u can guess it. Best Of Luck!💥\n"));
    while (true) {
        let user = await inquirer.prompt([
            {
                name: "input",
                type: "number",
                message: chalk.green("Enter your guess number: "),
                validate: (input) => {
                    if (isNaN(input)) {
                        return "Please enter a number";
                    }
                    return true;
                }
            }
        ]);
        tries += 1;
        if (user.input == randomNumber) {
            console.log(chalk.bold.bgRgb(71, 39, 180)("Congratulations! Your guess is correct.🤩👏"));
            console.log("You guessed it in ", tries, " tries");
            break;
        }
        else if (user.input < randomNumber && user.input > 0) {
            console.log(chalk.red("Wrong!💀") + "\nActual number is greater than ", user.input);
        }
        else if (user.input > randomNumber && user.input <= 100) {
            console.log(chalk.red("Wrong!💀") + "\nActual number is smaller than ", user.input);
        }
        else
            console.log(chalk.red("Invalid!💀") + "\nEnter the number between 0 and 100");
    }
    console.log(chalk.grey("Actual No : ", randomNumber));
    console.log(chalk.bold.magenta.underline("Your score : ", 100 - tries));
}
(async () => {
    await showBanner('Number Guessing Game', "Think you're smart? Prove it by guessing the number in least tries!");
})();
setTimeout(() => {
    playGame();
}, 500);
