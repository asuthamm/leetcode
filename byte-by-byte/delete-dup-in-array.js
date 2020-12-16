// using .reduce to eliminate of dup in arr

const deldups = (arr) => {
   return arr.reduce((a, b) => {
     console.log(a,b, a.indexOf(b))
     if (a.indexOf(b) < 0 ) {
       a.push(b);
     }
     return a;
   },[]);
 }
 deldups([1, 2, 2, 3])
 