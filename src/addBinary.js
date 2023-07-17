function addBinary(number1, number2) {
  if (typeof number1 != 'number' || typeof number2 != 'number') {
    throw new Error();
  }

  let numberAfterAddition = number1 + number2;
  let remainder;
  let result = '';
  let resultReverse = [];

  if (number1 === 0 && number2 === 0) {
    return 0;
  } else if (numberAfterAddition === 1) {
    return 1;
  } else {
    while (numberAfterAddition >= 1) {
      remainder = numberAfterAddition % 2;
      numberAfterAddition = Math.floor(numberAfterAddition / 2);
      resultReverse.push(remainder);
    }
  }
  resultReverse.reverse().forEach((val) => {
    result += val;
  });
  return Number(result);
}

module.exports = addBinary;
