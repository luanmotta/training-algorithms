/*
function solution(X, Y, D) {
  let current = X
  let i = 0
  for (; current < Y; i++) {
    current += D
  }
  return i
}
*/

function solution(X, Y, D) {
  const distance = Y - X
  let steps = 0
  if (distance > 0) {
    return Math.ceil(distance / D)
  }
  return steps
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



test([10, 85, 30], 3)
test([25, 150, 75], 2)
test([10, 10, 30], 0)
test([10, 50, 5], 8)
test([1, 50, 50], 1)
test([1, 50, 1.5], 33)
test([1, 0, 0], 0)
test([1, 1000000000, 1], 999999999)
test([1, 1000000000, 1000000000], 1)

/*
A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:

function solution(X, Y, D);

that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

For example, given:

  X = 10
  Y = 85
  D = 30
the function should return 3, because the frog will be positioned as follows:

after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100
Write an efficient algorithm for the following assumptions:

X, Y and D are integers within the range [1..1,000,000,000];
X ≤ Y.

*/