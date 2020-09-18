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
  let n1 = String(a).split('')
  let n2 = String(b).split('')
  let buffer
  let carries = 0
  let result = []

  n1 = n1.reverse()
  n2 = n2.reverse()

  if (n1.length < n2.length) {
    buffer = n1
    n1 = n2
    n2 = buffer
    n2.length = n1.length
    n2.fill(0)
  }

  result.length = n1.length
  result.fill(0)

  let carry = false

  for (let i = 0; i < n1.length; i++) {
    let sum = Number(n1[i]) + Number(n2[i] || 0) + Number(!!carry)
    if (sum > 9) {
      result[i] = sum - 10
      carries++
      carry = true
    } else {
      result[i] = sum
      carry = false
    }
  }

  return carries
}

/*

*/
test([159, 100], 0)
test([159, 1], 1)
test([9999, 1], 4)
test([65, 55], 2)
test([4, 2], 0)
test([25, 2], 0)
test([8, 2], 1)
test([1, 9], 1)
/*

*/