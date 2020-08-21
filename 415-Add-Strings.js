var addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = [];

  while (i >= 0 || j >= 0 || carry === 1) {
    let x = i < 0 ? 0 : +num1.charAt(i);
    let y = j < 0 ? 0 : +num2.charAt(j);

    result = (+(x + y + carry) % 10) + result;
    carry = x + y + carry >= 10 ? 1 : 0;

    i--;
    j--;
  }
  return result;
};
