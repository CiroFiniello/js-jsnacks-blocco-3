// > Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

// const number= Number.parseInt(prompt('scrivi un numero'));
// let stringNumber = number.toString();
// let arrayDigits = stringNumber.split('');
// console.log(arrayDigits);
// let reverseArray = arrayDigits.reverse();
// console.log(reverseArray);
// let joinArray = reverseArray.join('');
// console.log(joinArray);
// let reversedNumber = parseInt(joinArray, 10);
// console.log(reversedNumber);


function reverseNum(number){
    let rsNumber = '';
    let stringNumber = number.toString();
    let arrayDigits = stringNumber.split('');
    console.log(arrayDigits);
    let reverseArray = arrayDigits.reverse();
    console.log(reverseArray);
    let joinArray = reverseArray.join('');
    console.log(joinArray);
    let reversedNumber = parseInt(joinArray, 10);
    console.log(reversedNumber);
    return rsNumber;
}
const x = Number.parseInt(prompt('scrivi un numero'));
reverseNum(x);