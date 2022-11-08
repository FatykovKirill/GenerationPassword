const numbers = document.querySelector('#numbers');
const upperCase = document.querySelector('#upperCase');
const lowerCase = document.querySelector('#lowerCase');
const symbols = document.querySelector('#symbols');
const lengthPassword = document.querySelector('#lengthPassword');
const btnGenerator = document.querySelector('button');
const result = document.querySelector('#result');
const symbolContent = document.querySelector('.special_symbols');
const specialSymbols = '!@#$%^&*(){}[]=<>/,.';

symbolContent.textContent = specialSymbols;

btnGenerator.addEventListener('click', () => {

    const length = +lengthPassword.value;

    if (length == '' || length > 100 || length < 0 || isNaN(length)) {
        return result.textContent = 'Enter from 1 to 100';
    };
    
    result.textContent = generatorPassword(length);

});


function generatorPassword(length) {
    const password = [];

    for (let i = 0; i < length; i++) {
        const funcs = [
            numbers.checked ? getRandomNumber() : null,
            upperCase.checked ? getRandomUpperCase() : null,
            lowerCase.checked ? getRandomLowerCase() : null,
            symbols.checked ? getRandomSymbol() : null,
        ]

        const randomItems = [];

        for (const func of funcs) {
            if (func) {
                randomItems.push(func);
            }
        }

        password.push(randomItems[Math.floor(Math.random() * randomItems.length)]);
    }

    return password.join('');
}


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
    return specialSymbols[Math.floor(Math.random() * specialSymbols.length)];
}
