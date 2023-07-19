
let coinFlip;
let check = /^[0-9]+$/; 


flipCount = Number(prompt('How many times you want to flip?'));

if (!check.test(flipCount)) {
     console.log('please enter a number.')
} else{
     for(i = 0; i < flipCount; i++){
          console.log(flipCount);
          coinFlip = Math.round(Math.random());
          if (coinFlip === 1){
               console.log('Tails');
          } else if(coinFlip === 0) {
               console.log('Head')
          }
     }
     
}
