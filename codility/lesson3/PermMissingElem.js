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
  if (!array.length) {
    return 1
  }
  const set = new Set(array)

  let i = 1
  for (; i <= set.size; i++) {
    if (!set.has(i)) {
      return i
    }
  }
  return i
}

/*

*/
test([[2, 3, 1, 5]], 4)
test([[]], 1)
test([[2]], 1)
test([[1, 2, 4]], 3)
test([[1, 2, 3]], 4)
test([[2, 3, 1, 4, 6]], 5)
test([[3, 2]], 1)
test([[3, 1]], 2)
/*

*/