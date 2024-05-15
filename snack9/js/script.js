// Snack9 Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.
const myarry = [];
let i = 0;
do{
    i=i+1;
    const number = Number.parseInt(prompt('scrivi un numero'));
    myarry.push(number); 
}while(i < 7);
console.log(myarry);
