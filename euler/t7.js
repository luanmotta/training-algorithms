const equals = (result, expected) => {
  if (typeof expected === 'object') {
    for (let i = 0; i < result.length || i < expected.length; i++) {
      if (result[i] !== expected[i]) {
        return false
      }
    }
    return true
  } else {
    return result === expected
  }
}

// Tests
const test = (params, expected) => {
  const result = solution(...params), color = equals(result, expected) ? '\x1b[32m' : '\x1b[31m', reset = '\x1b[0m'
  console.log(`${params} | expected ${expected} get ${result}`, color, `${equals(result, expected)}\n`, reset)
}


/*
10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

*/

const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

const findNextPrime = (afterN) => {
  for (let i = afterN + 1;; i++) {
    if (isPrime(i)) {
      return i
    }
  }
}

function solution(limit) {
  let counter = 1
  let prime = 2
  while (counter < limit) {
    prime = findNextPrime(prime)
    counter++
  }
  return prime
}

/*

*/
test([6], 13)
test([7], 17)
test([10001], 104743)
/*
*/