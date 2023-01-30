// Snack3
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.
let N = prompt("scegli un numero");

newArray = [];
for (let i = 0; i < N; i++) {
  let newArray = Array(10) //creo un array di 10 numeri
    .fill() //riempo l'array
    .map(() => Math.floor(101 * Math.random())); //con numeri compresi tra 1 e 100
  console.log(newArray); //stampo gli array
}

// non è sicuramente la soluzione giusta :(
