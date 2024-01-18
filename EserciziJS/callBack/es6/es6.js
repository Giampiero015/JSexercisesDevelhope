const ogg = 
{ 
    name: "John",
    age: 30 
};
function fetchDataFromAPI(callback) {
    console.log("recupero dati in corso... ");
    let id =setInterval(() => {
        console.log("||");
    }, 200);
    setTimeout(() => {
        clearInterval(id);
        callback(ogg);
    }, 2000);
    
  }
  
  function handleData(data) {
    console.log(data);
  }
  
  fetchDataFromAPI(handleData);