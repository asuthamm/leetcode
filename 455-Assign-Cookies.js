// Leetcode 455 Assign Cookies

var findContentChildren = function(g, s) {
  g.sort( (a, b) => a-b ); 
  s.sort( (a, b) => a-b ); 
  
  let contentChildren = 0;
  let i = g.length-1;
  let j = s.length-1;

  while (i >= 0 && j >= 0) {
    console.log('testing greed of', g[i], 'with cookie', s[j]);
    if (s[j] >= g[i]) {
      contentChildren++;
      console.log('child with greed of ', g[i], 'gets', s[j]);
      i--;
      j--;
    } else {
      i--;
    }
  }
  
  return contentChildren;
};

const g = [2,2] 
const s = [1,2,3]

findContentChildren(g,s)