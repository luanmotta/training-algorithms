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
A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
*/

function solution(array) {
  const set = new Set()
  for ( let i = 1 ; i <= array.length ; i++ ) {
    let val = array[i - 1]
    if (set.has(val)) {
      return 0
    }
    set.add(val)
  }
  for ( let i = 1 ; i <= set.size ; i++ ) {
    if (!set.has(i)) {
      return 0
    }
  }
  return 1
}

test([[1, 2]], 1)
test([[2, 1]], 1)
test([[1]], 1)
test([[2]], 0)
test([[1, 1]], 0)
test([[4, 1, 3, 2]], 1)
test([[4, 1, 3]], 0)
test([[1, 2, 3, 4, 4, 5]], 0)
test([[5, 4, 3, 2, 1]], 1)
