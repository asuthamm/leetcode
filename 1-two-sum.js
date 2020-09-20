var twoSum = function(nums, target) {

  let lookup = [];
    
  for (let i in nums) {
    let curr = nums[i];
    let counterpart = target - curr;
    
    if (lookup.indexOf(counterpart) !== -1) {
      return [curr, counterpart];
    }
    lookup.push(curr);    
    //console.log(`At the end of idx ${i}, curr=${curr}`);
    //console.log('lookup=', lookup);  
    //console.log(' ');      
  }    
};

twoSum([1,2,3,4],5)
