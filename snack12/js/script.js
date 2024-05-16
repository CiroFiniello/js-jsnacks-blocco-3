// Snack 12
// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.
// const parola1 = prompt('inserire la prima parola');
// const parola2 = prompt('inserire la seconda parola');
// console.log(parola1.length);
// console.log(parola2.length);
// if (parola1.length == parola2.length){
//     console.log('stessa lunghezza');
//     console.log(parola1.length);
//     console.log(parola2.length);
// } else if (parola1.length > parola2.length){
//     console.log(parola1);
// }else{
//     console.log(parola2);
// }
function Getparola(parola1,parola2){
    if (parola1.length == parola2.length){
            console.log('stessa lunghezza');
            console.log(parola1.length);
            console.log(parola2.length);
        } else if (parola1.length > parola2.length){
            console.log(parola1);
        }else{
            console.log(parola2);
}
}
const x = prompt('inserire la prima parola');
const y = prompt('inserire la seconda parola');
Getparola(x,y);
