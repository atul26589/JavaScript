const name='John';
console.log('Hello, ${name}');

let car =null;
console.log(car);
console.log(typeof car);

const adminRole=Symbol("admin");
const editorRole=Symbol("Editor");
console.log(adminRole);

let person={
    firstName:"Atul",
    lastName:"Anand",
    age:28,
    isStudent:false


};

person.nationality="Canadian";
person.age=29;
console.log(person.firstName);
console.log(typeof person);
console.log(person);

let student={
    name:"Alice",
    grade:12,
    subject:{
        math:"A",
        science:"B"
    }
};
console.log(student.subject);
console.log(student.subject.math);
console.log(student["name"]);


