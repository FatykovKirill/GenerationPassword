// const numbers = document.querySelector('#numbers');
// const upperCase = document.querySelector('#upperCase');
// const lowerCase = document.querySelector('#lowerCase');
// const symbols = document.querySelector('#symbols');
// const lengthPassword = document.querySelector('#lengthPassword');
// const btnGenerator = document.querySelector('button');

let arrFuncsPassword = [getRandomNumber(),
getRandomLowerCase(),
getRandomUpperCase(),
getRandomSymbol()];

let password = [];
for (let i = 0; i <= 5; i++) {
    password.push(arrFuncsPassword[Math.floor(Math.random() * arrFuncsPassword.length)]);
}

console.log(password.join(''));

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function getRandomUpperCase() {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getRandomLowerCase() {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getRandomSymbol() {
    const specialSymbols = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
    return specialSymbols[Math.floor(Math.random() * specialSymbols.length)];
}

