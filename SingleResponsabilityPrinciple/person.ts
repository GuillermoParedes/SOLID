// Clase que no cumple con el objetivo de SRP
class Person {
    private name: string;
    private lastName: string;
    private age: number;

    constructor(name: string, lastName: string, age: number) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    getName () {
        return this.name;
    }

    getLastName () {
        return this.lastName;
    }

    getAge () {
        return this.age;
    }
}

interface FullName {
    get(): string;
}


class GetFullName implements FullName {

    constructor(private person: Person) {}

    get(): string {
        return this.person.getName() + ' ' + this.person.getLastName();
    }
}

class GetFullLastname implements FullName {
    constructor(private person: Person) {}

    get(): string {
        return this.person.getLastName() + ' ' + this.person.getName();
    }
}


const David = new Person('David', 'Paredes', 28);

console.log('Obteniendo el FullName',new GetFullName(David).get());

console.log('Obteniendo el FulllastName',new GetFullLastname(David).get());



