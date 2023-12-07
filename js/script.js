/* 
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

/* FUNCTIONS */

/**
 * ## Random Number Generator
 * Funzione che genera numero random da min a max
 * @param {number} min 
 * @param {number} max 
 * @returns 
*/
function generateRandomNumbComputer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/**
 * ## Check Odd or Even
 * Function that check if a number is odd or even
 * @param {number} sum 
 * @returns
 */
function isOddOrEven(sum) {
    if (sum % 2 === 0) {
        
        return 'Even';

    }
    else {

       return 'Odd';

    }
}


// Salvo in una variabile il bottone Even
const even = document.getElementById('even');

// Al click del bottone
even.addEventListener('click', function(){

    // Salvo in una variabile l'elemento della dom
    const firstValue = document.querySelector('.first-value')
    
    //Stampo in pagina la scelta dell'utente
    firstValue.innerHTML = 'Player : Even'
})

// Salvo in una variabile il bottone Odd
const odd = document.getElementById('odd')

// Al click del bottone
odd.addEventListener('click', function(){

     // Salvo in una variabile l'elemento della dom
    const firstValue = document.querySelector('.first-value')

    //Stampo in pagina la scelta dell'utente
    firstValue.innerHTML = 'Player : Odd'
})

// Salvo in una variabile il bottone Submit
const submit = document.getElementById('submit')

//Al click del bottone submit
submit.addEventListener('click', function(){
    
    // Salvo in variabili gli elementi della dom
    const secondValue = document.querySelector('.second-value')
    const thirdValue = document.querySelector('.third-value')

    //Salvo in una variabile il numero random tra 1 e 5
    const randomNumber = generateRandomNumbComputer(1, 5)

    // Salvo in una variabile la somma tra il numero dell'utente e quello del computer
    const sum = Number(userNumber.value) + randomNumber
    
        //Stampo in pagina la somma tra il numero scelto dall'utente e generato dal computer
        secondValue.innerHTML = `Total sum: ${sum}`

        //Stampo in pagina se la somma è pari o dispari
        thirdValue.innerHTML = `The sum is: ${isOddOrEven(sum)}`

    // Se l'utente ha scelto pari e la somma dei numeri è pari
    if (even.value === isOddOrEven(sum)) {

        // Salvo in una variabile l'elemento della dom
        const result = document.querySelector('.result')

        // Stampo in pagina l'esito del gioco
        result.innerHTML = 'Complimenti Utente hai vinto!'
    
    //Altrimenti la scelta dell'utente non coincide con la somma dei numeri
    }else {

        // Salvo in una variabile l'elemento della dom
        const result = document.querySelector('.result')

        // // Stampo in pagina l'esito del gioco
        result.innerHTML = 'Complimenti Computer hai vinto!'
    }
})