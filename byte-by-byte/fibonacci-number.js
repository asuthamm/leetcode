const fib = (n) => {

  let fibSeq = [];
  if (n < 0) {
    fibSeq.push(-1);
  }
  if (n === 0 ) {
  fibSeq.push(0);
}

  for ( let i = 1; i <= n; i++)
    if ( i === 1 || i === 2) {
      fibSeq.push(1);
    } else {
      fibSeq.push(fibSeq[i-2] + fibSeq[i-3]);
    }
  console.log(fibSeq)
  return fibSeq.pop();
}