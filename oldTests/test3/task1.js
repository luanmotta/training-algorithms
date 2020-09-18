function solution(array, rotations) {
  const arrayLength = array.length
  const leftRotations = rotations % arrayLength
  const array2 = []
  array.forEach((item, index) => {
    let newIndex
    const leftToEnd = arrayLength - index
    if (index + leftRotations >= arrayLength) {
      newIndex = leftRotations - leftToEnd
    } else {
      newIndex = leftRotations + index
    }
    array2[newIndex] = item
  })
  return array2
}



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


test([[0, 1, 2], 1], [2, 0, 1])
test([[3, 8, 9, 7, 6], 3], [9, 7, 6, 3, 8])
test([[0, 0, 0], 1], [0, 0, 0])
test([[0, 100], 7], [100, 0])
test([[-100, 0, 100], 0], [-100, 0, 100])
test([[0, 100, 50, -100], 251], [-100, 0, 100, 50])