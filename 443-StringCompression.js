// 443. String Compression
const compress = function(chars) {
  let idx = 0;
  let i   = 0;
  let j   = 0;

  while ( i < chars.length ) {

    while ( i < chars.length && chars[i] === chars[j] ) {
      j++;
    }

    chars[idx++] = chars[i];
    if (j-i > 1) {
      for ( let el of (''+(j-i)).split('') ) {
        chars[idx++] = el;
      }
    }
    i = j;
  };
  // console.log(chars);
  return idx;
};
// 
// compress(["a","a","a","b","b","b","b","b","b","b","b","b","b","b","c","c"]);
compress(["a","b","b","c","c"]);
