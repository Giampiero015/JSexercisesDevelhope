function caricaModulo(modulo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Il modulo ${modulo} è stato caricato.`);
        }, 2000);
    });
}

async function lanciaVeicoloSpaziale() {
    try {
        console.log(await caricaModulo("modulo A"));
        console.log(await caricaModulo("Modulo B"));
        console.log(await caricaModulo("Modulo C"));
        console.log("Veicolo spaziale pronto per il lancio!");
    } catch (error) {
        console.log("Errore caricamento moduli...")
    }

}
lanciaVeicoloSpaziale();