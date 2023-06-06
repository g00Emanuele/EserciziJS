/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(num1,num2){
    if(num1 === num2){
        total = (num1 + num2)*3
    } else {
        total = num1 + num2 
    }
    return total
}

let totalSum = crazySum(21, 21)
console.log(totalSum)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(num){
    if(num > 20 && num <= 100 && num === 400){
        value = true
    } else { 
        value = false
    }
    return value
}

let varNumber = boundary(19)
console.log(varNumber)

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(stringa){
    return stringa.split("").reverse("").join("")
}

let word = 'epicode'
let UpDownWord = reverseString(word)
console.log(UpDownWord)

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(stringa){
    newStr = stringa.replace(stringa[0], stringa[0].toUpperCase())
    return newStr
}

let newWord = upperFirst(word)
console.log(newWord)

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n){
    const arr = []
    for(let i = 0; i < n; i++ ){
        arr.push(Math.floor(Math.random()*10))
    }
    return arr 
}

let numeroACaso = giveMeRandom(4)
console.log(numeroACaso)

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2){
    surface = l1 * l2
    return surface
}

let areaDaCalcolare = area(20, 47)
console.log(areaDaCalcolare)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(number){
    tot = number - 19
    if(tot > 19){
        tot = tot * 3
    }
    return tot
}

let crazyNumber = crazyDiff(40)
console.log(crazyNumber)

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify (stringa){
    if(stringa.startsWith('code ')){
        return stringa
    } else {
        return 'code ' + stringa
    }
        
}

let stringaACaso = 'Ciao come stai?'
codeString = codify(stringaACaso)
console.log(codeString)

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
