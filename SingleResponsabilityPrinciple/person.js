// Clase que no cumple con el objetivo de SRP
var Person = /** @class */ (function () {
    function Person(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var GetFullName = /** @class */ (function () {
    function GetFullName(person) {
        this.person = person;
    }
    GetFullName.prototype.get = function () {
        return this.person.getName() + ' ' + this.person.getLastName();
    };
    return GetFullName;
}());
var GetFullLastname = /** @class */ (function () {
    function GetFullLastname(person) {
        this.person = person;
    }
    GetFullLastname.prototype.get = function () {
        return this.person.getLastName() + ' ' + this.person.getName();
    };
    return GetFullLastname;
}());
var David = new Person('David', 'Paredes', 28);
console.log('Obteniendo el FullName', new GetFullName(David).get());
console.log('Obteniendo el FulllastName', new GetFullLastname(David).get());
