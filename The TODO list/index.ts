#! /usr/bin/env node

import inquirer from "inquirer";


let todos: string[]=[];
let loop= true;

while(loop){
    const answers:{
        TODO:string
        Addmore: boolean
    }= await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            messsage: "what do you want to add in your TODO?"
        },
        {
            type:"confirm",
            name: "Addmore",
            message:" Do you want to add more TODO?",
            default: false
        }
    ])
    const{TODO, Addmore }= answers;
    console.log(answers)
    loop = Addmore
    if(TODO){
        todos.push(TODO)

    }else{
        console.log("kindly add valid input")
    }
}
console.log(todos)

if (todos.length > 0){
    console.log("your todos list: \n")
    todos.forEach(todos =>{
        console.log(todos)
    })

}else {
    console.log(" No Todos found")
}