function Dado (){
    return Math.floor(Math.random()*(6-1)+1);
}
let dado1=Dado();
let dado2=Dado();
setTimeout(() => {
    console.log(`Lancio dei dadi: Dado 1= ${dado1} Dado 2= ${dado2}`);    
}, 2000);

setTimeout(() => {
    console.log("Lancio dei dadi in corso: ");
}, 1000);