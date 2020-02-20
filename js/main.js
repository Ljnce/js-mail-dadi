//ES DADI:
//Se scrivi "lancia i dadi", uscirà un numero da 1 a 10; se è incluso tra 1 e 5 perderai, se invece è incluso tra 5 e 10, vincerai.
 var lanciaDadi = parseInt(prompt('Scrivi "lancia" per lanciare i dadi e scoprire se hai vinto 🤹🏻 \n \r ----> Se usciraù un numero maggiore di 5 avrai vinto 👍🏻 \n \r ----> Se uscirà un numero mino di 5, avrai perso 👎🏻'));
 var lanciaDadi = Math.round(Math.random() * 10);
console.log(lanciaDadi);
if (!isNaN(lanciaDadi)) {


    if ( (lanciaDadi >= 0) && ( lanciaDadi <= 5)){
        document.getElementById('haiperso').innerHTML = 'Hai perso, è uscito: ' + lanciaDadi + '! 😞';
    } else if((lanciaDadi > 5) && (lanciaDadi <= 10)){
        document.getElementById('haivinto').innerHTML = 'Hai vinto, è uscito: ' + lanciaDadi + '! 😃';
    }


}else {
    console.log('hai sbagliato');
}


//ES EMAIL:
//Chiedi la mail con un prompt
//Controlla che sia nella LISTA
//Stampa un messaggio

var chiediMail = prompt('Inserisci qui la tua mail');

var listaMail = ['tony@stark.us', 'hulk@banner.us', 'steve@rogers.us', 'thor@thunder.us', 'vedova@nera.us']

var mailCorretta = false;

for (var i = 0; i < listaMail.length; i++) {
     var mailCorrette = listaMail[i];
     if (mailCorrette == chiediMail){
        mailCorretta = true;
    }
 }


 if (mailCorretta == true){
    console.log('Mail accettata, puoi accedere!');
    document.getElementById('invito').innerHTML = 'Sei ufficialmente invitato al party di fine anno';

}
else {
    console.log('Mail declinata, non puoi accedere');
    document.getElementById('declinato').innerHTML = 'Non sei stato invitato';
}
