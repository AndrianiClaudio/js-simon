/**CONSEGNA
   Visualizzare in pagina 5 numeri casuali. 
   Da lì parte un timer di 30 secondi.
   Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che
   ha visto precedentemente, tramite il prompt().
   Dopo che sono stati inseriti i 5 numeri, il software dice quanti e  
   quali dei numeri da indovinare sono stati individuati.
*/

/**PARTE TESTUALE
// ---Visualizzare in pagina 5 numeri casuali
// COSA MI SERVE:
    // NUMERO_GENERAZIONI(5)
    // funzione per generare numero casuale
    // ripeto funzione per un numero pari a NUMERO_GENERAZIONI(5)
    // ogni numero casuale generato va salvato per poi poterlo stampare a pagina senza problemi
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
   
// ---Visualizzare in pagina 5 numeri casuali
function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const NUMBER_QUANTITY = 5;
// estremi del valore generato
const min_secret_number = 1;
const max_secret_number = 100;
const casualNumbers = [];
const container = document.querySelector('.container');
for(let i = 0;i<NUMBER_QUANTITY;i++) {
    let number = randomNumber(min_secret_number,max_secret_number);
    // controllo non sia stato generato due volte lo stesso numero.
    while(casualNumbers.includes(number)) {
        number = randomNumber(min_secret_number, max_secret_number);
    }
    //inserisco numero generato nel mio array
    casualNumbers.push(number);
    container.innerHTML += casualNumbers[i];
    if(i < NUMBER_QUANTITY - 1) {
        container.innerHTML += ' - ';
    }
}