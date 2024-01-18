let tempoRimanente = 10;
function contoAllaRovescia(start) {
    console.log( start-1);
}
console.log("Conto alla rovescia in corso...")
let id=setInterval(() => {
    contoAllaRovescia(tempoRimanente+1)
    tempoRimanente--;
    if(tempoRimanente==-1){
        console.log("Conto alla rovescia terminato.");
        clearInterval(id);
    }
}, 1000);