class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log("Hi, my name is " + this.name + " and I am " + this.age + ".");
    }
}

let matthias = new Person("Matthias", 25);
let trinity = new Person("Trinity", 5);
let ishmael = new Person("Ishmael", 1);

matthias.greeting();
trinity.greeting();
ishmael.greeting();