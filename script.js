/* -------------- MAIN ---------------- */

let parolainserita = prompt("inserisci una parola").toLowerCase;
let risultato = isParolapalindroma(parolainserita);

console.log(getResultString(risultato));

let sceltapariodispari = prompt("scegli pari o dispari");
let sceltanumero = prompt("inserisci un numero da 1 a 5");
let numeronemico = getNumerorandom();

let somma = (parseInt(sceltanumero) + parseInt(numeronemico));



console.log(pariodispari(somma));

if (sceltapariodispari == pariodispari(somma)) {
    console.log("hai vinto");

} else {
    console.log("hai perso");

}

/* ------------------------------ */


/* ------------- FUNZIONI ----------------- */



function getResultString(risultato) {
    if (risultato) {
        return "la parola è palindroma";
    } else {
        return "la parola non è palindroma";
    };
}

function pariodispari(somma) {
    if (somma % 2 == 0) {
        return "pari";
    }
    return "dispari";
}

function getNumerorandom() {
    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
};




function isParolapalindroma(parola) {
    for (let i = 0; i < parola.length; i++) {
        if (parola[i] != parola[parola.length - 1 - i]) {
            return false;
        };
    };
    return true;
};