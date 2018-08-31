var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getInfo = function () {
        return "hello " + this.name + ", i am " + this.age + " old;";
    };
    Person.prototype.canSpeak = function () {
        return "i can speak!";
    };
    Person.prototype.canEat = function () {
        return "i can eat!";
    };
    return Person;
}());
var gretter = new Person("wangyue", 24);
console.log(gretter.getInfo());
console.log(gretter.canSpeak());
console.log(gretter.canEat());
