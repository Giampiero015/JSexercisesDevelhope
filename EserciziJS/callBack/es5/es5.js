function performOperation(a, b, callback) {
    displayResult(a+b);
  }
  
  function displayResult(result) {
    console.log(result);
  }
  performOperation(a, 3, displayResult);