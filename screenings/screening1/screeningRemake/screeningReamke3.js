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

function solution(n1, n2) {
  let counter = 0
  let arr1 = String(n1).split('').reverse()
  let arr2 = String(n2).split('').reverse()

  if (arr1.length !== arr2.length) {
    if (arr1.length < arr2.length) {
      let buffer = arr2
      arr2 = arr1
      arr1 = buffer
    }
    arr2.length = arr1.length

    for (let i = 0; i < arr2.length; i++) {
      if (!arr2[i]) {
        arr2[i] = '0'
      }
    }
  }
  let carry = 0
  for (let i = 0; i < arr1.length + 1; i++) {
    if (Number(arr1[i]) + Number(arr2[i]) + carry > 9) {
      counter++
      carry = 1
    } else {
      carry = 0
    }
  }
  return counter
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

