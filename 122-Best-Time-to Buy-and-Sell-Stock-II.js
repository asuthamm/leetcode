var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i];
    }
  }
  return profit;
};
maxProfit([7, 1, 5, 3, 6, 4]); // 3
maxProfit([1, 2, 3, 4, 5]); // 4
