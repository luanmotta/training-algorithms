function solution(A) {
  const aLength = A.length
  const B = []
  for (let i = 0; i < aLength; i++) {
    const value = A[i]
    if (B[value]) {
      B[value] = false
    } else {
      B[value] = true
    }
  }

  let i = 0
  while(true) {
    if (B[i] === true) {
      return i
    }
    i++
  }
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
  console.log(`(${params}) | expected ${expected}; got ${result}`, color, `${isCorrect}`, reset)
}

test([[9,3,9,3,9,7,9]], 7)
test([[1]], 1)
test([[12]], 12)
test([[0]], 0)
test([[3, 3, 3, 3, 3]], 3)

/*
A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9

the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.
*/