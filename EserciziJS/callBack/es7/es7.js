function performOperation(a, b, callback) {
    if((typeof (a+b) == "number"))
    {
        callback( null , (a+b));
    }else
    {
      callback(new Error("ko") , null);
    }
  }
  
  function displayResult(error , result) {
    if(error)
    {
      console.log("Inserire valori numerici.");
    }else{
      console.log(result);
    }
    
  }
  performOperation(5 , 3, displayResult);