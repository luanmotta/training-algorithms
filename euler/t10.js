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
Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

const isPrime = (n) => {
  for (let i = 2; i <= n / i; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

function solution(limit) {
  let sum = 2
  for (let i = 3; i < limit; i++) {
    if (!isPrime(i)) {
      continue
    }
    sum += i
  }
  return sum
}

/*

*/
test([7], 10)
test([10], 17)
test([2000000], 142913828922)
/*

*/