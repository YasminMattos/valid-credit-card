var btn = document.getElementById('btn');
btn.addEventListener('click', isValidCard);

function isValidCard(event) {
  var cardNumber = document.getElementById('input').value;
  var text = document.getElementById('output');

  if ( cardNumber == 0 || cardNumber == ''){
    text.textContent = '';
  } else {
    var arr = cardNumber.toString().split('').reverse();
    var newArr = [];
    
    for(var i = 0; i < arr.length; i++)
      newArr.push(parseInt(arr[i]));
      
      var even = [];//  [ 18, 4, 6, 16, 2 ]
      var sumEven = [];//[9, 7, 4, 6, 2]
      var odd = []; //  [ 4, 9, 7, 9, 7, 6 ]
      
      for(var j = 0; j < newArr.length; j++){
      if((j+1) % 2 === 0){
        even.push(newArr[j]*2);
      } else{
        odd.push(newArr[j]);
      }
      };
      
      for(var k = 0; k < even.length; k++){
          if (even[k] >= 10){
            sumEven.push(parseInt(even[k]/ 10) + even[k] % 10);
          }else if(even[k] < 10){
            sumEven.push(even[k]);          
          }
      };

      var mixArr = sumEven.concat(odd);
      var totalSum = 0;
      for(var m=0; m < mixArr.length; m++)
        totalSum += mixArr[m];
        
        if(totalSum % 10 === 0 && cardNumber.length >= 9){
          text.textContent = 'The credit card N° ' + cardNumber + ' is valid';
        } else {
          text.textContent = 'Not valid credit card';
        };
  };
    
  };
  

 

