var twoSum = function(nums, target) {

  let lookup = [];

  for (let i in nums) {
    let curr = nums[i];
    let counterpart = target - curr;

    if (lookup.indexOf(counterpart) !== -1) {
      // counterpart found, return idx of the two sum
      return [nums.indexOf(curr), nums.indexOf(counterpart)];
    }
    lookup.push(curr);    
  }    
  return 0;
};

twoSum([1,2,3,4],5)
