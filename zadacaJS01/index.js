function Razbij(event) {
    event.preventDefault();

    
    let brojac = document.getElementById("brojacTeksta").value;
    let brojacZnakova = brojac.length;
    let brojacRijeci = brojac.split(['.']).length;



    document.getElementById("brojZnakova").innerHTML = `Broj znakova u rečenici je ${brojacZnakova}.`;
    document.getElementById("brojRijeci").innerHTML = `Broj znakova u rečenici je ${brojacRijeci - 1}.`;

};