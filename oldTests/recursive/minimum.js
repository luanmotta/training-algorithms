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

function solution(array) {
  let min = array[0]

  const findMin = (i) => {
    if (array[i] < min) {
      min = array[i]
    }
    if (i < array.length)
      return findMin(i+1)
    return min
  }

  return findMin(0)
}

/*

*/
test([[1, 7, 2, -4, 12]], -4)
/*

*/