/*Schreibe eine Funktion, die eine Zahl rundet.
Verwende die Zahlen aus dem Kommentar.
Gib das Ergebnis in der Konsole aus.*/

let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];


let arrFnRoundnr = (nr) => {
    return Math.round(nr);
}

let roundedArray = [];

let arrFnRoundAllnr = (array) => {
    for (let i = 0; i < array.length; i++) {
        roundedArray[i] = Math.round(array[i]);
    }
}
console.log(array);

console.log('----------------------------------------------------------------------');


arrFnRoundAllnr(array);
console.log(roundedArray)
