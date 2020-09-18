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



*/

function solution(N, A) {
  let array = []
  array.length = N
  array.fill(0)

  let maxCounter = 0
  let newMaxCounter = 0

  for (let i = 0; i < A.length; i++) {
    const X = A[i] - 1;
    if (0 <= X && X <= N - 1) {
      if (array[X] < maxCounter) {
        array[X] = maxCounter + 1
      } else {
        array[X] = array[X] + 1
      }
    }
    if (X === N) {
      maxCounter = newMaxCounter
    }
    if (array[X] > newMaxCounter) {
      newMaxCounter = array[X]
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] < maxCounter) {
      array[i] = maxCounter
    }
  }
  return array
}

/*

*/
test([5, [3, 4, 4, 6, 1, 4, 4]], [3, 2, 2, 4, 2])
test([1, [1, 1, 1]], [3])
test([2, [1, 2, 1, 1, 2, 3, 1, 2]], [4, 4])
test([4, [1, 1, 2, 4, 4, 4]], [2, 1, 0, 3])
test([4, []], [0, 0, 0, 0])
/*

*/