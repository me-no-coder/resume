class Person {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    }
    var person = new Person("James");
person._name = "Jones";