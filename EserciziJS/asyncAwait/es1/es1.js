function caricamentoDati() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
      }, 2000);
    });
  }
async function ottieniDati(){
    try {
        let a = await caricamentoDati();
        console.log(a);
    } catch (error) {
        console.log(error);
    }
}
ottieniDati();