// 1. Create a function that //accepts 3 numbers as //parameters, and returns //their sum.
// 2. Create a function named //isNameOddOrEven() that //accepts a string as a //parameter. The function should //return whether a received name has an odd or even //number of letters. The expected return should be in the //following format - string: ‘<name> has an even/odd //number of letters’.
function sumThreeNumbers(num1, num2, num3){
    return num1 + num2 + num3;
  }
  sumThreeNumbers(5,5,10);
  
  function isNameOddOrEven(string1){
    if(string1.length % 2 ===0){
      return `${string1} has an even number of letters`;
    }else{
      return `${string1} has an odd numbers of letters`;
    }
  }
  isNameOddOrEven(`miami heat will win`);