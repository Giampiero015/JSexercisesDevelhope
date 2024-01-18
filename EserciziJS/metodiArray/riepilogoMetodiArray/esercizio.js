const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];
studenti.forEach(studende=>console.log(studende.nome));
let voto = studenti.find(studente=>studente.voto>=90);
console.log(voto);
let media = studenti.reduce((a,user)=>a+user.voto,0)/studenti.length;
console.log(media);
let nomi = studenti.map(studente=>studente.nome.toUpperCase());
console.log(nomi);
let voti=studenti.filter(studente=> studente.voto>84);
voti.forEach(voto=> console.log(voto));