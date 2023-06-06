//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numA = 90;
let numB = 50;

if(numA > numB){
  console.log("Il numero più grande è il primo e vale:", numA)
}else if(numA === numB){
  console.log("I due numeri sono uguali e valgono:", numA)
}else{
  console.log("Il numero più grande è il secondo e vale:", numB)
}


/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num = 20;

if(num < 5){
  console.log("Tiny")
} else if(num < 10){
  console.log("Small")
} else if(num < 15){
  console.log("Medium")
} else if(num < 20){
  console.log("Large")
} else if(num >= 20){
  console.log("Huge")
}  



//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

let numbers = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i < numbers.length; i++){
  if((i + 1) === 3 || (i + 1) === 8){
    continue
  }
  console.log(i + 1)
}

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

let numeri = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

for(let i = 0; i < numeri.length; i++){
  if((i + 1) % 2 === 0){
  console.log("Il numero è pari ed è:", i + 1)
  } else {
    console.log("Il numero è dispari ed è:", i + 1)
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numC = 16;
let numD = 8;

if(numC === 8 || numD === 8){
  console.log("Uno dei due numeri vale 8")
}

if(numC + numD === 8 || numC - numD === 8 || numD - numC === 8){
  console.log("La loro somma o differenza vale 8")
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*

let totalShoppingCart = 45
const shippingCost = 10

if(totalShoppingCart > 50){
  console.log("La spedizione è gratuita. Il prezzo totale è:", totalShoppingCart)
} else {
  console.log("Ti verrà addebitato il costo di spedizione. Il totale è:", totalShoppingCart + shippingCost)
}

*/


/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart = 23
let totalShippingCartDiscount = totalShoppingCart - (totalShoppingCart * 0.20)
const shippingCost = 10

if(totalShippingCartDiscount > 50){
  console.log("La spedizione è gratuita. Il prezzo totale è:", totalShippingCartDiscount)
} else {
  console.log("Ti verrà addebitato il costo di spedizione. Il totale è:", totalShippingCartDiscount + shippingCost)
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = false;
let gender
gender = ((isMale === true) ? gender = 'male' : gender = 'female')
console.log(gender)

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for(let i = 1; i <= 100; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz")
  } else if(i % 3 === 0){
    console.log("Fizz")
  } else if(i % 5 === 0){
    console.log("Buzz")
  } else {
    console.log(i)
  }
}