const fibonacci = function(seq) {
  if (seq < 0 || Number.isNaN(seq) || !Number.isInteger(seq)) {
    return 'OOPS';
  }
  if (seq === 0) {
    return 0;
  }
  let first = 0;
  let second = 1;
  for (let i = 2; i <= seq; i++) {
    let current = first + second;
    first = second;
    second = current;
  }
  return second;
};

console.log(fibonacci(0));

// Do not edit below this line
module.exports = fibonacci;
