class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return `hello ${this.name}, i am ${this.age} old;`;
    }

    canSpeak() {
        return `i can speak!`
    }

    canEat() {
        return `i can eat!`
    }
}

let gretter = new Person("wangyue", 24);

console.log(gretter.getInfo());
console.log(gretter.canSpeak());
console.log(gretter.canEat());

