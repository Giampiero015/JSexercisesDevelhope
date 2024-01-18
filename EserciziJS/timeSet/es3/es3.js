function mostraPromemoria() {
    console.log("Promemoria: È ora di fare una pausa!");
  }
setTimeout(() => {
    mostraPromemoria();
}, 5000);
setTimeout(() => {
    console.log("Il promemoria è in fase di impostazione");
}, 4000);