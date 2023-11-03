#! /usr/bin/env node

class School{
    name: string;
    students: Student[] =[];
    teachers: Teacher[]=[]
    addStudent(stdObj:Student){
        this.students.push(stdObj)
    }
    addTeacher(teachObj: Teacher){
        this.teachers.push(teachObj)
    }


    constructor(name:string){
        this.name=name
    }
}





class Student{
    name: string;
    age: number;
    schoolName: string;

    constructor(name:string,age:number,schoolName:string){
        this.name=name;
        this.age=age;
        this.schoolName=schoolName

    }

}

class Teacher extends Student {

}



let school1 =new School("Alpha")
let school2 =new School("nooby")

let s1= new Student("bilal", 40, school1.name)
let s2= new Student("bilaaa", 44, school2.name)
let s3= new Student("bilo", 49, school2.name)

let t1= new Teacher("cat", 124, school1.name)
let t2= new Teacher("bear", 39, school2.name)
let t3= new Teacher("lion", 79, school2.name)


school1.addStudent(s1)
school2.addStudent(s2)
school2.addStudent(s3)

school1.addTeacher(t1)
school2.addTeacher(t2)
school2.addTeacher(t3)


console.log(t1)
console.log(t2)
console.log(t3)




//console.log(s1)
// console.log(school1)