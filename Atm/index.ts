#! /usr/bin/env noden

import inquirer from "inquirer";

interface ansType {
    userId: string,
    userPin: number,
    accountType:string,
    transType: string;
    amount: number
};

type user = {

    userId: string,
    userPin: number,
};

let users: user[]= [
    {
        userId: "hamza",
        userPin: 1234,
    },
    {
        userId:"Suleman",
        userPin: 5678,
    },
    {
        userId: "Ahmed",
        userPin: 9101,
    },
];


let balance: number = Math.floor((Math.random()*100000));
let answers1: ansType;
let answers2: ansType;

startloop();

async function startloop(){
    await getUserID();
    do{
         await getTransaction();
        var again= await inquirer.prompt([
            {
                type: "list",
                name: "restart",
                choices: ['Yes', 'No'],
                message:" Do You Want To Continue:",
            }
        ]

        )
    }while(again.restart=='Yes');
}

async function getUserID(){
    answers1= await inquirer.prompt([
        {
            type:"input",
            name: "userID",
            message:" Please enter your ID:"
        },
    ]);
    await checkuserID(answers1.userId, answers1.userPin);
};

async function checkuserID(userID: string, userPin: number){
    let condition= false;
    for (let i=0; i<users.length; i++){
        if(userID===users[i].userId && userPin===users[i].userPin){
            condition=true;
            break;
        }

    }
    if(!condition){
        console.log('Invalid user ID or Pin. Try Again');
    }
} 
    
async function getTransaction(){
    answers2= await inquirer.prompt([
        {
            type: "list",
            name: "accountType",
            choices:["current", "saving"],
            message: "please select account type",
        },
        {
            type:"list",
            name: "transType",
            choices:["Fast cash", "Withdraw"],
            message: "please select transaction type:",
        },
        {
            type: "list",
            name: "amount",
            choices:[5000, 10000, 15000, 20000, 250000],
            message:`please select your amount( current Balance is ${balance}):`,
            when(answers2){
                return answers2.transType=="Fast cash";
            }
        },
        {
            type: "number",
            name: "amount",
            message: `please enter your amount( current Balance is ${balance}):`,
            when(answers2){
                return answers2.transType==" withdraw";
            }
        }
    ])
    if (answers1.userId && answers1.userPin){
        if(answers2.amount<=balance){
            balance -=answers2.amount;
            console.log(` Your current balance is ${balance}`);
        }else {
            console.log(`Insufficient balance ${balance}`)
        }
    }
};
