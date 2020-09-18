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
Write a function:

class Solution { public int solution(int A, int B, int K); }

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
*/

function solution(start, end, mod) {
  let counter = 0
  for (let i = start; i <= end; i++) {
    if (i % mod === 0)
      counter++
  }
  return counter
}

test([6, 11, 2], 3)
test([1, 1, 1], 1)
test([1, 2, 1], 2)
test([0, 0, 50], 1)
test([0, 1, 1], 2)
test([1, 0, 1], 0)
test([2, 1, 1], 0)
test([2, 8, 3], 2)
test([3, 9, 3], 3)
test([11, 345, 17], 20)
