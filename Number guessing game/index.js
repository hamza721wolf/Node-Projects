import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "write youe guess b/w 1 to 10:"
    }
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess", systemGeneratedNo, "SYs");
if (userGuess === systemGeneratedNo) {
    console.log("Yeaaah Your Answer Is Correct \n You Win!!");
}
else {
    console.log("You Lose \n Sorry Try Again");
}
