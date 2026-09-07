function createHumanInstance(firstname, lastname, dateOfBirth) {
  return {
    firstname,
    lastname,
    dateOfBirth
  };
}

const firstname = prompt('Введите имя:');
const lastname = prompt('Введите фамилию:');
const dateOfBirth = prompt('Введите дату рождения:');

const person = createHumanInstance(firstname, lastname, dateOfBirth);

console.log(person);