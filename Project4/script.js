var num = document.querySelector("#num"); 
  var negButton = document.getElementById("decre");
  var posButton = document.getElementById("incre");
  var inputValue = document.getElementById("inputField").value;
  var reset = document.getElementById("resetButton");
  var numValue = 0;

  // adding the functionality for the increment button

  posButton.onclick = function() { 
    var inputValue = parseInt(document.getElementById("inputField").value); 
    numValue += inputValue; 
    num.innerText = numValue; 
  };

  // adding the functionality for the negative button

  negButton.onclick = function() { 
    var inputValue = parseInt(document.getElementById("inputField").value); 
    if (numValue - inputValue < 0) {
        numValue = 0; 
    } else {
        numValue -= inputValue; 
    }
    
    num.innerText = numValue; 
  };

  // adding the functionality for the reset button
  reset.onclick = function(){
    numValue = 0;
    num.innerText = numValue;
    document.getElementById("inputField").value = 1;
  }


