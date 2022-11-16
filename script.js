let parolainserita = prompt("inserisci una parola");

let risultato = parolapalindroma(parolainserita);

if (risultato) {
    console.log("la parola è palindroma");

} else {
    console.log("la parola non è palindroma");
};




function parolapalindroma(parola) {
    for (let i = 0; i < parola.length; i++) {

        if (parola[i] != parola[parola.length - 1 - i]) {
            return false;

        };

    };
    return true;
};




