// Leetcode 917 Reverse Only Letters

var reverseOnlyLetters = function(S) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let strArr = S.split('');
  let i = 0;
  let j = S.length - 1;

  while (i < j) {
    while ( i < j && !(alpha.includes(S[i].toLowerCase())) ) {
      i++;
    }
    while (j > 1 && !(alpha.includes(S[j].toLowerCase()))) {
      j--;
    }
    const temp = S[i];
    strArr[i] = S[j];
    strArr[j] = temp;
    i++;
    j--;
   }
  return strArr.join('');
};
const str = "a-bC-dEf-ghIj"
reverseOnlyLetters(str);

// Input:  "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
