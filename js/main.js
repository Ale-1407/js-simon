/*

Descrizione:

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei
numeri da indovinare sono stati individuati.

*/

//creo array vuoto
let numeri = [];

//genero 5 numeri casuali con una funzione
function generaNumeriRandom(){
    
    for( i = 1; i <= 5; i++){

    num = Math.round(Math.random() * 100);
    numeri.push(num);

    //stampo in pagina i numeri generati che l'utente dovrà ricordarsi
    document.getElementById('risultatoNumeriGenerati').innerHTML = `<h1>I tuoi numeri da ricordare sono: ${numeri}</h1>`
    }

    console.log(numeri);
}

generaNumeriRandom();

//faccio scomparire i numeri dopo 5 secondi
setTimeout (nascondiNumeri, 5000);

function nascondiNumeri(){
    document.getElementById('risultatoNumeriGenerati').classList.add('display');
}