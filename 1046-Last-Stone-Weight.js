// 1046-Last-Stone-Weight

var lastStoneWeight = function(stones) {

  while (stones.length > 1) {
    console.log(stones)
    stones.sort((a,b) => a-b);
    let x = stones.pop();
    let y = stones.pop();

    if (x-y > 0) {
      stones.push(x-y)
    }
  }
  return stones.length
};

lastStoneWeight([2,7,4,1,8,1]); // 1



// Math.max(...[1,3,5,7])