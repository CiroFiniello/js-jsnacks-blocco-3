

let arrayEl = Number.parseInt( prompt('dammi un numero'), 10);
let arrayNumb = [];

if(Number.isNaN(arrayEl) || arrayEl > 40 || arrayEl < 5){
    arrayEl = 15;
}
for (let index = 0; index < arrayEl; index++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    arrayNumb.push(randomNumber);
}
console.log(arrayNumb.slice(-5));
console.log(arrayNumb);

