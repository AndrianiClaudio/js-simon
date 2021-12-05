/**CONSEGNA
   Visualizzare in pagina 5 numeri casuali. 
   Da lì parte un timer di 30 secondi.
   Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che
   ha visto precedentemente, tramite il prompt().
   Dopo che sono stati inseriti i 5 numeri, il software dice quanti e  
   quali dei numeri da indovinare sono stati individuati.
*/
/**
 * 
 * @param {*} min valore minimo generabile
 * @param {*} max valore massimo generabile
 * @returns numero casuale tra min e max
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * 
 * @param {*} n numero di elementi da generarte
 * @param {*} min valore minimo generabile
 * @param {*} max valore massimo generabile
 * @returns array di n elementi compresi tra min e max
 */
function generateRandomNumbers(n, min, max) {
    const randomNumbers = []
    for (let i = 0; i < n; i++) {
        let number = randomNumber(min, max);
        while (randomNumbers.includes(number)) {
            number = randomNumber(min, max);
        }
        randomNumbers.push(number);
    }
    return randomNumbers;
}
const container = document.querySelector('.container');
function getWatchTimeFromLevel() {
}
const play = document.getElementById('play');

play.addEventListener('click', setLevel);

function setLevel() {
    const level = document.getElementById('set-level');
    game(level.value);
}

function game(difficulty) {
    let watchNumberTime_s, timer_s;
    switch (difficulty) {
        case 'easy':
            watchNumberTime_s = 8;
            timer_s = 10
            // timer_s = 1
            break;
        case 'medium': 
            watchNumberTime_s = 5;
            timer_s = 30    
            // timer_s = 3    
            break;
        case 'hard':  
            watchNumberTime_s = 2;
            timer_s = 40;
            // timer_s = 4;
            break;
        default:
            watchNumberTime_s = 0;
            timer_s = 0;
            break;
    }
    const NUMBER_QUANTITY = 5;
    const min_secret_number = 1;
    const max_secret_number = 100;
    const randomPcNum = generateRandomNumbers(NUMBER_QUANTITY, min_secret_number, max_secret_number);
    //stampa 
    for (let i = 0; i < NUMBER_QUANTITY; i++) {
        container.innerHTML += randomPcNum[i];
        // aggiunta separatore numero successivo
        if (i < NUMBER_QUANTITY - 1) {
            container.innerHTML += ' - ';
        }
    }
    setTimeout(waitFirstTimer, watchNumberTime_s * 1000,timer_s);
    
    //elimina numeri dopo tot.tempo preimpostato. Inizia timer per la funzione WaitTimerForUse
    function waitFirstTimer(timer_s) {
        container.innerHTML = '<strong>Dovevi guardare prima. il timer si é concluso ... attendi per inserire i numeri che ricordi</strong>';
        setTimeout(waitSecondTimer, timer_s * 1000);
    }
    //richiede numeri dopo un tot.di tempo preimpostato grazie a funzione userInsertNumbers.
    function waitSecondTimer() {
        const userNumbers = userInsertNumbers();
        printResult(userNumbers, randomPcNum);
        //    console.log('numFind: ',numFind,'numFind-length: ',numFind.length);
    }
    /**
     // crea e restituisce un array di 5 numeri inseriti tramite prompt
     * contralla se effettivamente é stato inserito un numero
     * controllo se valore numerico
     * controllo se compreso negli estremi in cui calcolo i numeri casuali
     * controllo che utente non inserisca due volte lo stesso numero 
     */
    function userInsertNumbers() {
        const userNumbers = [];
        for (let i = 0; i < NUMBER_QUANTITY; i++) {
            let num = parseInt(prompt(`Inserisci numero ${i + 1}/${NUMBER_QUANTITY}: `));
            while (isNaN(num) || num < min_secret_number || num > max_secret_number || userNumbers.includes(num)) {
                if (isNaN(num)) {
                    num = parseInt(prompt(`Errore: inserito valore non numerico. Reinserisci numero ${i + 1}/${NUMBER_QUANTITY}: `));
                } else if (num < min_secret_number || num > max_secret_number) {
                    num = parseInt(prompt(`Errore: inserire numero compreso tra ${min_secret_number} e ${max_secret_number}. Reinserisci numero ${i + 1}/${NUMBER_QUANTITY}: `));
                } else if (userNumbers.includes(num)) {
                    num = parseInt(prompt(`Errore: numero giá inserito prima. Reinserisci numero ${i + 1}/${NUMBER_QUANTITY}: `));
                }
            }
            userNumbers.push(num);
        }
        return userNumbers;
    }
    function printResult(num, pcNum) {
        const numFind = [];
        for (let i = 0; i < NUMBER_QUANTITY; i++) {
            for (let j = 0; j < NUMBER_QUANTITY; j++) {
                if (num[i] == pcNum[j]) {
                    numFind.push(num[i]);
                }
            }
        }
        if (numFind.length == 0) {
            container.innerHTML = '<strong>Ops! Pessima memoria o attenzione! Non ti sei ricordato nessun numero.</strong>';
        } else {
            if (numFind.length == NUMBER_QUANTITY) {
                container.innerHTML = '<strong>Memoria eccellente! Ti sei ricordato tutti i numeri.</strong>';
            } else {
                container.innerHTML = `
                <strong>
                    Complimenti. Hai ricordato ${numFind.length} numeri su ${NUMBER_QUANTITY}
                </strong>
                `
            }
            container.innerHTML += `
            <br>
            <span>
                I numeri trovati sono:
            </span>
            `
            for (let i = 0; i < numFind.length; i++) {
                container.innerHTML += `
                <br>
                <span>
                    ${numFind[i]}
                </span>
                `
            }
        }
    }
}