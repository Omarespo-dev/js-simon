
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// COME PRIMA COSA INIZIEREI A DARE I NUMERI RANDOM A .LIST 

// Posso usare una funzione dove ogni volta potrei invocarla, con all'interno la funzione di mathrandom
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; 
}


// Assegna un numero casuale a ciascun <li>      (document.createElement)/pdf
const numberList = document.getElementById("numbers-list");  // DEVONO ANDARE IN OUTPUT NUMERI RANDOM

const names = ["","","","",""]
let items = "";

for(let i = 0; i < names.length; i++){
    items += `<li>${names[i]} ${getRandomInt(1, 50)}</li>`;

}
numberList.innerHTML= items



// IN QUESTO CASO HO VERIFICATO CHE NON BASTA SOLO LA FUNZIONE DI MATH RANDOM  (RIVEDERE NON SAPREI COME FARE)

// function numeriDiversi (numeridiversi){
//     // dichiaro una variabile dove restituisce un array di numeri
//     let number= []

//     // Ciclo 
//     for(let i = 0; i < number.length; i++){
        
//     }
//     // ??????
// }


//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////



// COME SECONDO STEP FACCIO COUNT DOWN
const countDown = document.getElementById("countdown"); //DEVE ANDARE IL COUNTDOWN DA 30 SEC
const instructions = document.getElementById("instructions");  //IL PARAGRAFO CHE CAMBIA TESTO
const answersForm = document.getElementById("answers-form"); // SAREBBE IL FORM CHE COMPARE E SCOMPARE CON D-NONE

// Quindi setto i secondi di partenza
let secondi= 31;

// SETTIAMO IL SET INTERVAL DICHIARANDO COUNTDOWN
const downCount = setInterval(function (){
    
    // Faccio una condizione dicendo che se i secondi arrivano a 0
    if(secondi === 0){
        clearInterval(downCount); //Mi fai il clear dell'intervallo

        // E STAMPI A VIDEO 
        countDown.innerHTML="0";
        
        // SCRIVO IL TESTO APPENA ESCE D-NONE
        instructions.textContent="Inserisci tutti i numeri che ricordi (l'ordine non è importante)";
        
        //  COME TERZO STEP FACCIO SPAWN DEL FORM APPENA IL COUNTDOWN VA A 0 E TOLGO I NUMERI
        answersForm.classList.remove("d-none");
        answersForm.classList.add("active");
        numberList.classList.add("d-none");

    }else{
        // decrementa il valore di secondi
        secondi = secondi - 1;
        
        // E STAMPI A VIDEO 
        countDown.innerHTML=secondi;
        numberList.classList.remove("d-none");
    }
}, 100);


///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////


// COME QUARTO STEP FAR INDOVINARE I NUMERI INSERITI DEL UTENTE SIANO QUELLI RANDOM
const inputGroup = document.getElementById("input-group"); // SONO I NUMERI CHE INSERISCI L'UTENTE NEL FORM UNA VOLTA CHE APPARE
const outputP1= document.getElementById("message1");  //DEVE MANDARE UN MESSAGGIO SE I NUMERI SONO STATI INDOVINATI TIPO 5 SU 5 ALLORA ESCE GRENNE / OPPURE SE I NUMERI SI INDOVINANO AD ESEMPIO 2 SU 5 ESCE ROSSO

answersForm.addEventListener("submit", function(event){
    // BLOCCO INVIO DEL FORM
    event.preventDefault();

    
})


    







