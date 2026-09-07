const first = new Promise(resolve => setTimeout(resolve, 1500, 76));
const second = new Promise(resolve => setTimeout(resolve, 2000, 106));

const allPromise = Promise.race([first, second]);

allPromise.then (() => console.log("first, second"));