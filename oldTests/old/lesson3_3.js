const solution = (A) => {
  const N = A.length
  let rightSide = 0
  let leftSide = 0
  let minDifference = Number.MAX_VALUE

  for (let i = 0; i < N; i++) {
    rightSide += A[i]
  }


  for (let P = 1; P < N; P++) {
    const valueToComute = A[P - 1]
    leftSide += valueToComute
    rightSide -= valueToComute

    // save the min difference
    const newDifference = Math.abs(leftSide - rightSide)
    if (newDifference < minDifference) {
      minDifference = newDifference
    }
  }

  return minDifference
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



test([[3, 1, 2, 4, 3]], 1)
test([[1, 2]], 1)
test([[-1000, 1000]], 2000)
test([[50, 0, 50]], 0)
test([[50, 50, 50]], 50)
test([[0, 0, 0, 1]], 1)
test([[0, 0, 0, 0]], 0)
test([[200, 200, 0, 0]], 0)
test([[1, 0, 0, 0, 0, 1]], 0)
test([[7, 3, 9, 11, 2, 8]], 2)

/*
A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

For example, consider array A such that:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:

P = 1, difference = |3 − 10| = 7
P = 2, difference = |4 − 9| = 5
P = 3, difference = |6 − 7| = 1
P = 4, difference = |10 − 3| = 7
Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

For example, given:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000].
*/