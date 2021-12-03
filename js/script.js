/**CONSEGNA
   Visualizzare in pagina 5 numeri casuali. 
   Da lì parte un timer di 30 secondi.
   Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che
   ha visto precedentemente, tramite il prompt().
   Dopo che sono stati inseriti i 5 numeri, il software dice quanti e  
   quali dei numeri da indovinare sono stati individuati.
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
function userInsertNumbers () {
    const userNumbers = [];
    for(let i=0;i<NUMBER_QUANTITY;i++) {
        let num = parseInt(prompt(`Inserisci numero ${i+1}/${NUMBER_QUANTITY}: `));
        // contralla se effettivamente é stato inserito un numero
        /**
         * controllo se valore numerico
         * controllo se compreso negli estremi in cui calcolo i numeri casuali
         * controllo che utente non inserisca due volte lo stesso numero 
         */
        while(isNaN(num) || num < min_secret_number || num > max_secret_number || userNumbers.includes(num)) {
            if (isNaN(num)) {
                num = parseInt(prompt(`Errore: inserito valore non numerico. Reinserisci numero ${i + 1}/${NUMBER_QUANTITY}: `));
            } else if (num < min_secret_number || num > max_secret_number) {
                num = parseInt(prompt(`Errore: inserire numero compreso tra ${min_secret_number} e ${max_secret_number}. Reinserisci numero ${i + 1}/${NUMBER_QUANTITY}: `)); 
            } else if(userNumbers.includes(num)) {
                num = parseInt(prompt(`Errore: numero giá inserito prima. Reinserisci numero ${i + 1}/${NUMBER_QUANTITY}: `)); 
            }
        }
        userNumbers.push(num);
    }
    return userNumbers;
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
const timer_s = 3;  // test timer
// const timer_s = 30;
const timerID = setTimeout(waitTimerForUse, timer_s * 1000);
// console.log(timerID);
// ---parte un timer di 30 secondi
let check = false;
//per quanto tempo verranno visualizzati prima di terminale
const watchNumberTime_s = 2;
const watchTimerID = setTimeout(() => {
    check = true;
    if(check) {
        container.innerHTML = '<strong>Dovevi guardare prima. il timer si é concluso</strong>';
        // console.log(watchTimerID);
    }
}, watchNumberTime_s * 1000);

function waitTimerForUse () {
    const userNumbers = userInsertNumbers();
    /**PARTE TESTUALE
        // ---Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
        // COSA MI SERVE:
        // controllo se la mia scelta é presente nei numeri casuali generati
        // salvo i numeri che sono stati individuati per poterli stampare poi
        // stampo a video #elementi ed elementi indovinati
    */
   console.log('userNumbers-length: ', userNumbers.length, 'randomPcNum-length: ',randomPcNum.length);
   for (let i = 0; i < NUMBER_QUANTITY; i++) {
       console.log('userNumbers: ', userNumbers[i], 'randomPcNum: ',randomPcNum[i]);
   }
    // console.log(userNumbers);
}