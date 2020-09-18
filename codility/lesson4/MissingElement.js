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
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

*/

function solution(array) {
  const set = new Set(array)
  let i = 1
  for (; i <= set.size ; i++ ) {
    if (set.has(i) === false) {
      return i
    }
  }
  return i > set.size ? i : 1
}

test([[1, 3, 6, 4, 1, 2]], 5)
test([[1, 2, 3]], 4)
test([[-1, -3]], 1)
test([[1, 2]], 3)
test([[4, 4, 4, 4, 1]], 2)
test([[100000, 1, 5000, 3, 2]], 4)
test([[2]], 1)
test([[1]], 2)
