function addBinary(number1,number2) {
  if (typeof number1 != 'number' || typeof number2 != 'number'){
    throw new Error();
  }
  return 0;
}

module.exports = addBinary;
