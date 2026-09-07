function GetNumber() {
    return new Promise( resolve => {
        setTimeout (resolve, 1000, 10);
    });
}

function GetNumber2() {
    return new Promise( resolve => {
        setTimeout (resolve, 2000, 15);
    });
}

Promise.all([GetNumber(), GetNumber2()]).then(() => console.log("fulfilled"));