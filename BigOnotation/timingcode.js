//Write a function that calculates the sum of all numbers
// from 1 up to and including some number n

function addUpTo(n) {
  //accumulator
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTo(6));

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo2(6));

// when inputs become large e.g addUpTo(100000000000), the looping solution becomes much slower
//in code execution time
