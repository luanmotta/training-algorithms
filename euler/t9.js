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
Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 3² + 4² = 9 + 16 = 25 = 5².

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/

const square = (n) => n * n

function solution(limit) {
  const squares = {}
  for (let i = 1; i < limit; i++) {
    const squared = square(i)
    squares[i] = squared
  }
  for (let a = 0; a < limit; a++) {
    for (let b = a; b < limit; b++) {
      for (let c = 0; c < limit; c++) {
        if (a + b + c === limit && squares[a] + squares[b] === squares[c]) {
          return (a * b * c)
        }
      }
    }
  }
}

/*

*/
test([12], 60)
test([1000], 31875000)
/*

*/