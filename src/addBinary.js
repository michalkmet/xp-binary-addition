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
  } else if (number1 === 1 && number2 === 0) {
    return 1;
  } else {
    while (numberAfterAddition >= 1) {
      remainder = numberAfterAddition % 2;
      numberAfterAddition = numberAfterAddition / 2;
      resultReverse.push(remainder);
    }
  }
  resultReverse.reverse().forEach((val) => {
    result += val;
  });
  return Number(result);
}

module.exports = addBinary;
