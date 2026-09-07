const person = {
  name: 'Bolg',
  race: 'Orcs'
};

if ('weapons' in person) {
  console.log('He is armed!');
} else {
  console.log('No weapons!');
}

function checkExistence(obj, propertyName) {
  if (propertyName in obj) {
    console.log(`This object has property ${propertyName}, its value is ${obj[propertyName]}`);
  } else {
    console.log(`No property with name ${propertyName}`);
  }
}