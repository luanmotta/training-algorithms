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

function solution(A) {
  let counter = 0
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] - (j - i) + A[j] >= 0) {
        counter++
      }
    }
  }
  return counter
}

test([[0, 0]], 0)
test([[0]], 0)
test([[10]], 0)
test([[2, 0, 0]], 2)
test([[1, 0, 1]], 3)
test([[2, 1, 4]], 3)
test([[1, 5, 2, 1, 4, 0]], 11)
test([[7, 0, 0, 7]], 5)
test([[1, 10, 100, 1]], 5)