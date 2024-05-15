// Snack9 Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.
const myarry = [];
let i = 0;
do{
    let number = Number.parseInt(prompt('scrivi un numero'));
    i =+ number;
    myarry.push(number); 
    console.log(i);
}while(i > 50);
console.log(myarry);



// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.