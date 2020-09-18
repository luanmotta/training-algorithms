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
  let counter = []
  let maxNumber = null
  let maxCounter = 0
  let possibleIndex = -1

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    counter[element] = (counter[element] || 0) + 1
    if (counter[element] >= maxCounter) {
      maxCounter = counter[element]
      maxNumber = element
      possibleIndex = i
    }
  }

  if (maxCounter > array.length / 2) {
    return possibleIndex
  }
  return -1
}

/*

*/
test([[1, 2, 3]], -1)
test([[2, 2, 3]], 1)
test([[1, 2, 2]], 2)
test([[2, 1, 2]], 2)
test([[2, 2, 2]], 2)
test([[2, 2, 2]], 2)
test([[3, 4, 3, 2, 3, -1, 3, 3]], 7)
/*

*/