#! /usr/bin/env node



import chalk from "chalk";

import inquirer from "inquirer";
// classes player & opponents
class Player {
    name:string;
    fuel: number =100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecreASE(){
        let fuel =this.fuel -25
        this.fuel= fuel
    }

}

class opponents {
    name:string;
    fuel: number =100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecreASE(){
        let fuel =this.fuel -25
        this.fuel= fuel
    }

}

// player name & oppnents names
let player = await inquirer.prompt ({
    type: "input",
    name: "name",
    message: " please enter your name"
})



let opponent = await inquirer.prompt({
    type: "list",
    name:"Select",
    message: "select your opponent",
    choices : [" skeleton", "assasin", "zombie"]
})
do {}
while(true)


// gather data
let p1 = new Player(player.name)
let o1 = new opponents(opponent.select)

if (opponent.select == "skeleton"){
    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)} `)

    let ask = await inquirer.prompt({
        type: "list",
        name:"opt",
        message: "select your opponent",
        choices : [" Attack", "Drink Portion", "Run"]
    })


    if(ask.opt == "Attack"){
        let num =Math.floor(Math.random()*2)
        if (num>0){
            p1.fuelDecreASE()

            console.log(`${chalk.bold.red(p1.name)} fuel is  ${p1.fuel}`)
            console.log(`${chalk.bold.greenBright(p1.name)} fuel is  ${o1.fuel}`)
        }
        if (num<=0){

            o1.fuelDecreASE()
            console.log(`${chalk.bold.red(p1.name)} fuel is  ${p1.fuel}`)
            console.log(`${chalk.bold.bgGreen(p1.name)} fuel is  ${o1.fuel}`)
        }

       
    }
    if(ask.opt =="drink portion"){
        p1.fuelDecreASE()


    }
    if (ask.opt == "Run"){
        console.log(chalk.red.bold.italic("your loose, better luck next time"))
    }
}

