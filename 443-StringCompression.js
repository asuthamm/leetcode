// 443. String Compression
const compress = function(chars) {
  let index = 0
  let i = 0
  console.log('original arr:', chars)
  console.log(' ');
  while(i < chars.length) {
      let j = i;
      console.log('starting:', chars[i], index, i, j)
      // more same char found
      while(j < chars.length && chars[j] === chars[i]) {
          // console.log('counting:', chars[j], index, i, j)
          j++
      }
      // diff chars detected
      console.log('ending:  ', chars[i], index, i, j)

      chars[index++] = chars[i] 
      if(j - i >  1) {
          for( let el of (''+(j-i)).split('') ) {
          // for( let el of (j-i).toString().split('') ) {
              // console.log('el', el)
              chars[index++] = el
          }
      }
      // i is now the starting point of new char
      i = j;
      console.log(' ')
      console.log('next iteration is', chars[i], index, i,j)
      // console.log(chars);
  }
console.log(chars)
return index;
};
// 
// compress(["a","a","a","b","b","b","b","b","b","b","b","b","b","b","c","c"]);
compress(["a","b","b","c","c"]);
