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
Largest palindrome product

A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const isPalindrome = (str) => {
  return str === str.split('').reverse().join('')
}

function solution(limit) {
  let max = 0
  for (let n1 = 0; n1 < limit; n1++) {
    for (let n2 = 0; n2 < limit; n2++) {
      let result = n1 * n2
      if (isPalindrome(String(result)) && result > max) {
        max = result
      }
    }
  }
  return max
}

/*

*/
test([100], 9009)
test([1000], 906609)
/*

*/