function introduceObject(obj = {}) {
    console.log('name: ' + obj.name);
    console.log('lastname: ' + obj.lastname);
}

const obj = {
    name: 'John',
    lastname: 'Doe',
    age: 30
}

introduceObject(obj);