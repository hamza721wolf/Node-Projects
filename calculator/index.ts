#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let{num1,num2,operation}= await inquirer.prompt([
    {
    name:"num1",
    type:"number",
    message:"enter first number:"
}, {
    name:"num2",
    type:"number",
    message:"enter second number:"
}, {
    name:"operation",
    type:"list",
    choices:["addition", "subtraction", "multiplication", "division"],
    message:"enter your age:"
},
]);
// console.log("Insha Allah, in"+(60-answers.age) + "years you will be 60 years old");
// console.log(chalk.bgBlueBright(answers.age));
// console.log(answers)

 if(operation==="addition"){
     console.log(`The sum of two numbers=${num1+num2}`)
 }else if(operation=="subtraction"){
     console.log(`The difference of two numbers=${num1-num2}`)
 }


 // created by Hamza Suleman