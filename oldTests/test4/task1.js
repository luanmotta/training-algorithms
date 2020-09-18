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

65 + 55 =>
1st column: 5 + 5 = 0 (1 is carried)
2nd column: 6 + 5 + 1 (carried) = 2 (1 is carried)
3rd column: 1 (carried) = 1
=> 120 (2 carry operations)

*/

function solution(a, b) {
  let counter = 0
  let carry = 0
  let A = String(a).split('').reverse()
  let B = String(b).split('').reverse()
  if (A.length < B.length) {
    let C = A
    A = B
    B = C
  }
  for (let i = 0; i < A.length + carry; i++) {
    if ( (Number(A[i] || 0) ) + (Number(B[i] || 0) ) + carry >= 10) {
      counter++
      carry = 1
    } else {
      carry = 0
    }
  }
  return counter
}

test([54, 46], 2)
test([1, 1], 0)
test([0, 0], 0)
test([5, 5], 1)
test([100, 100], 0)
test([55, 55], 2)
test([123, 0], 0)
test([66, 44], 2)
test([66, 4], 1)
test([4, 66], 1)
test([65, 55], 2)



test([65, 55], 2)
test([5, 5], 1)
test([59, 50], 1)
test([95, 5], 2)


test([123, 456], 0)
test([555, 555], 3)
test([900, 11], 0)
test([145, 55], 2)
test([0, 0], 0)
test([1, 99999], 5)
test([999045, 1055], 5)
test([101, 809], 1)
test([189, 209], 1)
