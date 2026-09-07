const human = {
  name: 'Ivan',
  lastname: 'Petrov',
  dateOfBirth: '02.08.1968',
  address: {
    street: 'StreetName',
    city: 'City'
  }
}

const propertyName = prompt('Введите имя свойства объекта human:');

console.log(human[propertyName]);