var heen = document.querySelector('h1');

function groot() {
    heen.classList.toggle('groot');
}

heen.addEventListener('click', groot);

console.log(heen);


/* met deze code vergroot de h1 in de header van de pagina door er op te klikken.
Dit is een erg simpele interactie, maar ik gebruik zowel de queryselector als de 
classlist om een dom element een class toe te wijzen.
*/