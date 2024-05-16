const frigorifero = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
console.log(frigorifero);
const chiedi = prompt('vuoi mettere la pesca nel frigo?');
if ( chiedi === 'si'){
    const pesca = frigorifero.push('pesca');
    console.log(frigorifero);
} else{
    alert('no bueno!');
}
let fruttofind = false;
for (let index = 0; index < frigorifero.length; index++) {
    if(frigorifero[index] === 'cocomero'){
        fruttofind = true;
    }
}
console.log(fruttofind);