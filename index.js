function validatePIN(pin) {
  //return true or false
  let count = 0;
  for (let i = 0; i < pin.length; i++) {
    if (
      pin[i] == '0' ||
      pin[i] == '1' ||
      pin[i] == '2' ||
      pin[i] == '3' ||
      pin[i] == '4' ||
      pin[i] == '5' ||
      pin[i] == '6' ||
      pin[i] == '7' ||
      pin[i] == '8' ||
      pin[i] == '9'
    ) {
      count++;
    } else {
      return false;
    }
  }
  if (count == 4 || count == 6) {
    return true;
  } else {
    return false;
  }
}

console.log(validatePIN('0000'));
