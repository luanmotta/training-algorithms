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

Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?


*/

const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

const findNextPrime = (init, end) => {
  for (let i = init + 1; i < end; i++) {
    if (isPrime(i)) {
      return i
    }
  }
  return null
}

function solution(limit) {
  let current = limit
  let largest = 0
  let prime = 2
  while (true) {
    if (isPrime(current)) {
      largest = current
      break
    }
    while (true) {
      if (current % prime === 0) {
        largest = prime
        current = current / prime
        break
      }
      prime = findNextPrime(prime, current)
    }
  }
  return largest
}

/*

*/
test([3], 3)
test([5], 5)
test([15], 5)
test([17], 17)
test([13195], 29)
test([600851475143], 6857)
/*

*/