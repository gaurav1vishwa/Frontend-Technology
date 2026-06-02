// 1. why to createing the object?
// createing an object using the object literal syntax
let student = {
    name : "gaurav",
    age : 22,
    course : "Masters in Computer Science",
    city : "Bhopal",

       study () {
        console.log(`${this.name} is studying ${this.course}and lives in ${this.city}`);
       }
}
console.log(student.name);
console.log(student.age);

student.study();


// second way to create an object using the constructor function

class Student {
    name;
    age;
    course;
    city;

    constructor(name, age, course, city) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.city = city;
    }

    study() {
        console.log(`${this.name} is studying ${this.course} and lives in ${this.city}`);
    }
}

let student1 = new Student("shni", 22, "Masters in Computer Science", "Bhopal");
student1.study();
