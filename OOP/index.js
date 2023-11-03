#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new person();
const programStart = async (person) => {
    do {
        console.log("Welcome Guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: " to whome you want to talk",
            name: "select",
            choices: [" khud se: self", "student"],
        });
        if (ans.select == "khud se: self") {
            console.log("hello i am talking to my self");
            console.log(" my health is stable");
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "to which student you want to talk",
                name: "student",
            });
            const student = person.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`hello i am ${name.name}, or me theek hun `);
                console.log(person.students);
            }
            if (student) {
                console.log(`hello i am ${student.name}, or me theek hun `);
                console.log(person.students);
            }
        }
    } while (true);
};
programStart(persons);
