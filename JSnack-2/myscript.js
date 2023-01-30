// Snack2
// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let myArray = [];

let sum = 0;

while (sum < 50) {
  let newNumber = parseInt(prompt("scegli un numero minore di 50"));
  myArray.push(newNumber);
  sum += newNumberri;
}

console.log(myArray);
