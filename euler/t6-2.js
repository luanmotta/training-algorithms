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
Sum square difference

The sum of the squares of the first ten natural numbers is 385,

The square of the sum of the first ten natural numbers is 3052,

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*/

const square = n => n * n

const sumOfSquares = (a) => {
  return a.reduce((total, current) => total += square(current), 0)
}

const squareOfSum = (a) => {
  return square(a.reduce((total, current) => total += current, 0))
}

function solution(limit) {
  const array = []
  array.length = limit
  for (let i = 0; i < limit; i++) {
    array[i] = i + 1
  }
  let n1 = sumOfSquares(array)
  let n2 = squareOfSum(array)
  return Math.abs(n1 - n2)
}

/*

*/
test([10], 2640)
test([100], 25164150)
/*
*/