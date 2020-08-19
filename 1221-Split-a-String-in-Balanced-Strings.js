// 1221. Split a String in Balanced Strings

var balancedStringSplit = function(s) {
  let balancedCount = 0;
  let count = 0;

  for (let i in s) {
    let current = s[i];
    if (current === 'L') {
      count++;
    } if (current === 'R') {
      count--;
    }

    if (count === 0) {
      balancedCount++;
    }
  }
  return balancedCount;
};

balancedStringSplit("RLLLLRRRLR")