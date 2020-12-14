//Find the median of two sorted arrays.

const arr1 = [1,3,5];
const arr2 = [2,4,6];

const median = (arr1, arr2) => {
  const arr =  arr1.concat(arr2);
  const mid = Math.floor(arr.length / 2);
  const sorted = [...arr].sort((a, b) => a - b);
//   console.log(sorted, mid);

  return arr.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}
median(arr1, arr2);
