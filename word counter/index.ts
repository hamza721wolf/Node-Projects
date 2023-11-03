#! /usr/bin/env node

import inquirer from "inquirer";


function counter (paragraph:string){
    let freeWhiteSpace= paragraph.replace(/\s/g,"")

    return freeWhiteSpace.length

}

// console.log(counter("hi hamza hi"))

async function startWordCount(counter:(text:string)=>number){
 do{
    let res= await inquirer.prompt({
        type:"input",
        message:"write paragraph here...",
        name:"paragraph"
    })
    console.log(counter(res.paragraph))
 }   
 while(true)
}
startWordCount(counter)