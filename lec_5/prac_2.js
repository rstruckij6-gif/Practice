function greetAdult (age, onAdult, onMinor) {
    if (age >= 21) onAdult(); 
    else onMinor();
}

function onAdultCallback() {
  console.log('Вы совершеннолетний!');
}

function onMinorCallback() {
  console.log('Вы несовершеннолетний!');
}

let age = +prompt("Enter your age: ");

greetAdult(age, onAdultCallback, onMinorCallback);