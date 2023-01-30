// Snack1
// Chiedi all'utente un valore minimo ed un valore massimo. Genera un numero casuale all'interno del range fornito dall'utente.

const valoreMinimo = parseInt(prompt("scegli il valore minimo"));
const valoreMassimo = parseInt(prompt("scegli il valore massimo"));

let numero = Math.floor(
  Math.random() * (valoreMassimo - valoreMinimo) + valoreMinimo
);
alert("questo è il tuo numero: " + numero);
