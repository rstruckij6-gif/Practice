function makeGreetingText(age = '18', name = 'user') {
    if (age < 21) {
        return `Hello, ${name}! You are underaged!`;
    } else {
        return `Hello, ${name}! You are an adult!`;
    }
}


const name = prompt('Type your name:');
const age = +prompt('Type your age:');
console.log(makeGreetingText(age, name));