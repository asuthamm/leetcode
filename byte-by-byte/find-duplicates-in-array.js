const dups = (arr) => {
   let result = [];
   let hash = {};
   
   arr.forEach(num => {
     console.log('checking', num);
     if (!hash[num]) {   //unique
       hash[num] = 0;
       hash[num] += 1;
     } else if (result.indexOf(num) < 0)  { 
       result.push(num);
     }
   })
  //  console.log(hash);
   return result;
  }
  dups([3, 3, 2, 2, 1, 3,3]) 
  // [3, 2]