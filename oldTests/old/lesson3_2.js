const solution = (A) => {
  const B = []
  const ALength = A.length
  B.length = ALength + 1
  const BLength = B.length
  B.fill(false)

  // Populate B
  for (let i = 0; i < ALength; i++) {
    const pos = A[i]
    B[pos] = true
  }

  // Find element that is not true
  let i = 1
  for (; i < BLength; i++) {
    if (B[i] === false) {
      return i
    }
  }
  return i
}

// Tests
const test = (params, expected) => {
  const result = solution(...params)
  let isCorrect = null
  if (typeof expected === 'object') {
    for (let i = 0; i < result.length && i < expected.length; i++) {
      if (result[i] !== expected[i]) {
        isCorrect = false
      }
    }
    if (isCorrect === null) {
      isCorrect = true
    }
  } else {
    isCorrect = result === expected
  }
  color = isCorrect ? '\x1b[32m' : '\x1b[31m', reset = '\x1b[0m'
  console.log(`(${params}) | expected ${expected}; got ${result}`, color, `${isCorrect ? 'passed' : 'failed'}`, reset)
}



test([[2, 3, 1, 5]], 4)
test([[1, 3]], 2)
test([[2, 3]], 1)
test([[1, 2]], 3)
test([[1, 2, 3, 5]], 4)
test([[]], 1)
test([[2]], 1)
test([[1]], 2)

/*
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
*/