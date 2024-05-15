// Snack9 Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.
const testarray = [];
const number = Number.parseInt(prompt('scrivi un numero'));
let i = 0;
do{
    i=i+1;
    testarray.push(number); 
}while(i = 6);
console.log(testarray);