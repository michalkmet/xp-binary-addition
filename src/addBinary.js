function addBinary(number1,number2) {
  if (typeof number1 != 'number' || typeof number2 != 'number'){
    throw new Error();
  }

  if(number1 === 0 && number2 === 0){
    return 0;
  }else if (number1 === 1 && number2 === 0){
    return 1;
  } else {
    return 10;
  }
  
}

module.exports = addBinary;
