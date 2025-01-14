// Selezioniamo gli input del DOM

const answersForm = document.getElementById("answers-form"); // SAREBBE IL FORM CHE COMPARE E SCOMPARE CON D-NONE
const inputGroup = document.querySelectorAll(".form-control"); // SONO I NUMERI CHE INSERISCI L'UTENTE NEL FORM UNA VOLTA CHE APPARE






// Selezioniamo gli output del DOM
const numberList = document.querySelectorAll(".list");  // DEVONO ANDARE IN OUTPUT NUMERI RANDOM

const countDown = document.getElementById("countdown") //DEVE ANDARE IL COUNTDOWN DA 30 SEC

const outputP= document.getElementById("message")  //DEVE MANDARE UN MESSAGGIO SE I NUMERI SONO STATI INDOVINATI TIPO 5 SU 5 ALLORA ESCE GRENNE / OPPURE SE I NUMERI SI INDOVINANO AD ESEMPIO 2 SU 5 ESCE ROSSO



//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////


// COME PRIMA COSA INIZIEREI A DARE I NUMERI RANDOM A .LIST 

// Posso usare una funzione dove ogni volta potrei invocarla, con all'interno la funzione di mathrandom
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; 
}



// IN QUESTO CASO HO VERIFICATO CHE NON BASTA SOLO LA FUNZIONE DI MATH RANDOM  (RIVEDERE NON SAPREI COME FARE)

function numeriDiversi (numeridiversi){
    // dichiaro una variabile dove restituisce un array di numeri
    let number= []

    // Ciclo 
    for(let i = 0; i < number.length; i++){
        
    }
    // ??????
}


//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////



// COME SECONDO STEP FACCIO COUNT DOWN

// Quindi setto i secondi di partenza
let secondi= 31;

// SETTIAMO IL SET INTERVAL DICHIARANDO COUNTDOWN
const downCount = setInterval(function (){
    
    // Faccio una condizione dicendo che se i secondi arrivano a 0
    if(secondi === 0){
        clearInterval(downCount) //Mi fai il clear dell'intervallo

        // E STAMPI A VIDEO 
        countDown.innerHTML="0"
    }else{
        // decrementa il valore di second
        secondi = secondi - 1
        
        // E STAMPI A VIDEO 
        countDown.innerHTML=secondi
    }
}, 1000)





