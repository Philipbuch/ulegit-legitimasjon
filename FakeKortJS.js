//Henter ut elementene

let fornavnEl = document.querySelector('#Fornavn')
let etternavnEl = document.querySelector('#Etternavn')
let fodselsdatoEl = document.querySelector('#Fodselsdato')
let utstedelsesdatoEl = document.querySelector('#Utstedelsesdato')
let utlopsdatoEl = document.querySelector('#Utlopsdato')
let personnummerEl = document.querySelector('#Personnummer')
let forerkortnummerEl = document.querySelector('#Forerkortnummer')
let klasseEl = document.querySelector('#Klasse')
let klasse2El = document.querySelector('#Klasse2')
let bildeEl = document.querySelector('#Bilde')

let bekrefteEl = document.querySelector('#Bekrefte')

//Henter ut elementene input-elementene skal erstatte

let enEl = document.querySelector('#En')
let toEl = document.querySelector('#To')
let treEl = document.querySelector('#Tre')
let fireaEl = document.querySelector('#FireA')
let firebEl = document.querySelector('#FireB')
let firedEl = document.querySelector('#FireD')
let femEl = document.querySelector('#Fem')
let niEl = document.querySelector('#Ni')
let nitoEl = document.querySelector('#NiTo')
let svarthvittbildeEl = document.querySelector('#SvartHvittBilde')
let svarthvittbildeLitenEl = document.querySelector('#SvartHvittBildeLiten')

let registrerEl = document.querySelector('#Registrer')
let passEl = document.querySelector('#Pass')

//A klikke vil generere passet

registrerEl.addEventListener('click', lagPass)

//For a hente ut bilde, var dette koden jeg matte bruke. Det krevdes at jeg matte bruke 2 funksjoner for a laste opp
//Source: Fikk litt hjelp av lillebroren min, sa dette er ikke tatt fra en nettside

var files;

function uploadImage(event){
    var target = event.target || window.event.srcElement, f = target.files;
    files = f;
}


function lagPass(){
    if(bekrefteEl.checked){
        if (files){
            //Gjor at DIVen blir synlig
            passEl.style.visibility = 'visible' 
            //Erstatter teksten i elementene med input-elementene. i tilegg legger jeg til tall foran, og gjor at de er bold
            enEl.innerHTML = `<p><span style="font-weight:500;">1.</span> ${fornavnEl.value}</p>`
            toEl.innerHTML = `<p><span style="font-weight:500;">2.</span> ${etternavnEl.value}</p>`
            treEl.innerHTML = `<p><span style="font-weight:500;">3.</span> ${fodselsdatoEl.value}</p>`
            fireaEl.innerHTML = `<p><span style="font-weight:500;">4a.</span> ${utstedelsesdatoEl.value}</p>`
            firebEl.innerHTML = `<p><span style="font-weight:500;">4b.</span> ${utlopsdatoEl.value}</p>`
            firedEl.innerHTML = `<p><span style="font-weight:500;">4d.</span> ${personnummerEl.value}</p>`
            femEl.innerHTML = `<p><span style="font-weight:500;">5.</span> ${forerkortnummerEl.value}</p>`
            niEl.innerHTML = `<p><span style="font-weight:500;">9.</span>&nbsp&nbsp${klasseEl.value}<span style="font-style:italic;">${klasse2El.value}</span>----</p>`

            // Lag en FileReader og sett svarthvittbilde sin src til filen fra inputen
            var fr = new FileReader();
            fr.onload = function(){
                svarthvittbildeEl.src = fr.result;
                svarthvittbildeLitenEl.src = fr.result;
            }
            fr.readAsDataURL(files[0]);
        }
        else{
            // Ingen fil hadde blitt valgt
            alert("ERROR: Ikke noe bilde vedlagt");
        }

    }else{
        alert('Du må godkjenne betingelsene.')
    }
    

}







