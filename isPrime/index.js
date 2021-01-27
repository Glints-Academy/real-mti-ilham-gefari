const isPrime = num => {
  // do code here
  let divider = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divider++;
    }
  }
  // console.log(divider)
  if (divider == 2) {
    return `${num} IS A PRIME`;
  } else {
    return `${num} IS NOT A PRIME`;
  }
}

// do not change this code below
const test = (testCase, result) => console.log(testCase === result);

test(isPrime(2), '2 IS A PRIME')
test(isPrime(283), '283 IS A PRIME')
test(isPrime(21), '21 IS NOT A PRIME')
test(isPrime(389), '389 IS A PRIME')
test(isPrime(973), '973 IS NOT A PRIME')

