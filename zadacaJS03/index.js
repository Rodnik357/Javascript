const botun = document.getElementById('botun');
const randomBroj = Math.floor(Math.random() * 100);
 
let brojPokusaja = 0;

function provjeriBroj(){
    
    let biramBroj = document.getElementById('biramBroj').value;

    if (biramBroj == randomBroj) {document.getElementById('izlazniText').innerHTML=`Bravooo, pogodio si točan broj`,
    brojPokusaja +=1;}

    else if (biramBroj < randomBroj) {document.getElementById('izlazniText').innerHTML=`Broj je veći`,
    brojPokusaja +=1;}

    else if (biramBroj > randomBroj) {document.getElementById('izlazniText').innerHTML=`Broj je manji`,
    brojPokusaja +=1;}

    document.getElementById('brojPokusaja').innerHTML = `broj pokusaja: ${brojPokusaja}`;
}

botun.addEventListener(provjeriBroj);
