#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let apiLink = "https://v6.exchangerate-api.com/v6/f7e5ae5514b848bb14c45697/latest/PKR";
let fetchData = async (data) => {
    let fetchData = await fetch(data);
    let res = await fetchData.json();
    return res.conversion_rates;
};
let data = await fetchData(apiLink);
let countries = Object.keys(data);
let firstCountry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: "Converting from",
    choices: countries,
});
let userMoney = await inquirer.prompt({
    type: "number",
    name: "rupee",
    message: `please enter the amount in ${chalk.greenBright.bold(firstCountry.name)}`
});
let secondCountry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: "converting to",
    choices: countries,
});
let cnv = `https://v6.exchangerate-api.com/v6/f7e5ae5514b848bb14c45697/pair/${firstCountry.name}/${secondCountry.name}`;
let cnvData = async (data) => {
    let cnvData = await fetch(data);
    let res = await cnvData.json();
    return res.conversion_rate;
};
let conversionRate = await cnvData(cnv);
let covertedRate = userMoney.rupee * conversionRate;
console.log(covertedRate);
