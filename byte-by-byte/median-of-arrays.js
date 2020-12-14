//Find the median of two sorted arrays.

const arr1 = [1,3,5];
const arr2 = [2,4,6];

const median = (arr1, arr2) => {
  const merged = arr1.concat(arr2);
  const sorted = [...merged].sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);
  // console.log(sorted, mid);

  return merged.length % 2 !== 0 ? sorted[mid] : 
         (sorted[mid - 1] + sorted[mid]) / 2;
}
median(arr1, arr2);
