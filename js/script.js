/**CONSEGNA
   Visualizzare in pagina 5 numeri casuali. 
   Da lì parte un timer di 30 secondi.
   Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che
   ha visto precedentemente, tramite il prompt().
   Dopo che sono stati inseriti i 5 numeri, il software dice quanti e  
   quali dei numeri da indovinare sono stati individuati.
*/

/**PARTE TESTUALE
    // ---parte un timer di 30 secondi
    // COSA MI SERVE:
    // funzione asincrona, che parta dopo un tempo preimpostato(30s) e aspettare la fine
    // ---Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    // COSA MI SERVE:
    // essere arrivati alla fine del tempo
    // inserire un numero, tramite funzione prompt, per un numero di volte pari a NUMERO_GENERAZIONI(5)
    // ---Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    // COSA MI SERVE:
    // devo aver salvato le mie scelte date tramite prompt
    // controllo se la mia scelta é presente nei numeri casuali generati
    // salvo i numeri che sono stati individuati per poterli stampare poi
    // stampo a video #elementi ed elementi indovinati
*/
 // ---  genera un numero casuale compreso tra due estremi
function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// ---genera e restituisce n numeri casuali con valore compreso tra min e max
function generateRandomNumbers(n,min,max) {
    const randomNumbers = []
    for(let i = 0;i<n;i++) {
        let number = randomNumber(min,max);
        // controllo non sia stato generato due volte lo stesso numero.
        while(randomNumbers.includes(number)) {
            number = randomNumber(min, max);
        }
        randomNumbers.push(number);
    }
    return randomNumbers;
}
// ---Visualizzare in pagina 5 numeri casuali
const NUMBER_QUANTITY = 5;
// estremi del valore generato
const min_secret_number = 1;
const max_secret_number = 100;
const randomPcNum = generateRandomNumbers(NUMBER_QUANTITY,min_secret_number,max_secret_number);
//stampa 
const container = document.querySelector('.container');
for (let i = 0; i < NUMBER_QUANTITY; i++) {
    container.innerHTML += randomPcNum[i];
    // aggiunta separatore numero successivo
    if(i < NUMBER_QUANTITY - 1) {
        container.innerHTML += ' - ';
    }
}

// ---parte un timer di 30 secondi
function waitTimerForUse () {
    console.log('il timer si é concluso');
}
// COSA MI SERVE:
    // funzione asincrona, che parta dopo un tempo preimpostato(30s) e aspettare la fine
// const timer_s = 2;  // test timer
const timer_s = 30;
const timer = setTimeout(waitTimerForUse, timer_s * 1000);
console.log('post-timer. ma esco prima');