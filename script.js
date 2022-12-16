/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console
 con il numero della cella cliccata.*/

 const zone = document.getElementById('grid');
 const button = document.getElementById('button');
 const col = 10;
 const rows = 10;
 const total = col * rows;

 //Creazione delle celle
button.addEventListener('click',function(){
    let cell = ` `;
        for(let i=0;i<total;i++){
        cell = document.createElement("div");
        cell.classList.add('cell');
        zone.appendChild(cell);
        }
 cell.innerHtml = "div";
});
 
 