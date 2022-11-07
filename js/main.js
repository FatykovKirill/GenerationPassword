const numbers = document.querySelector('#numbers');
const upperCase = document.querySelector('#upperCase');
const lowerCase = document.querySelector('#lowerCase');
const symbols = document.querySelector('#symbols');
const lengthPassword = document.querySelector('#lengthPassword');
const btnGenerator = document.querySelector('button');
const result = document.querySelector('#result')

btnGenerator.addEventListener('click', () => {

    const length = +lengthPassword.value;

    if (length == '') {
        return '';
    };
    if (length > 100) {
        return result.textContent = 'Enter from 1 to 100';
    }

    result.textContent = generatorPassword(length);

});

function generatorPassword(length) {
    const hasNumbers = numbers.checked;
    const hasUpperCase = upperCase.checked;
    const hasLowerCase = lowerCase.checked;
    const hasSymbols = symbols.checked;

    let arrRandomFunc = [];

    if (hasNumbers) {
        arrRandomFunc.push(getRandomNumber());
    }
    if (hasUpperCase) {
        arrRandomFunc.push(getRandomLowerCase()
        );
    }
    if (hasLowerCase) {
        arrRandomFunc.push(getRandomUpperCase());
    }
    if (hasSymbols) {
        arrRandomFunc.push(getRandomSymbol());
    }

    let password = [];

    for (let i = 0; i < length; i++) {
        password.push(arrRandomFunc[Math.floor(Math.random() * arrRandomFunc.length)]);
        arrRandomFunc = [];

        if (hasNumbers) {
            arrRandomFunc.push(getRandomNumber());
        }
        if (hasUpperCase) {
            arrRandomFunc.push(getRandomLowerCase()
            );
        }
        if (hasLowerCase) {
            arrRandomFunc.push(getRandomUpperCase());
        }
        if (hasSymbols) {
            arrRandomFunc.push(getRandomSymbol());
        }
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
    const specialSymbols = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
    return specialSymbols[Math.floor(Math.random() * specialSymbols.length)];
}



// function checkInput(obj) {
//     for (let key in obj) {

//         console.log(obj.key)
//         // if (obj.key[0]) {
//         // }
//         // console.log(obj.key[1]);
//     }
//     // return arrRandomFunc;
// }