class User {
constructor(name, role, age) {
this.name = name;
this.role = role;
this.age = age;
}

greet() {
console.log(`Hello, my name is ${this.name}, I am a ${this.role} and I am ${this.age} years old.`);
}
}

const user1 = new User('Alice', 'admin', 30);
user1.greet();