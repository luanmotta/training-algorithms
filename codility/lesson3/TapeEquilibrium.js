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
  let rightSum = array.reduce((total, current) => total += current, 0)
  let leftSum = 0
  let minP = Math.abs(rightSum)

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    leftSum += element
    rightSum -= element
    const difference = Math.abs(leftSum - rightSum)
    if (difference < Math.abs(minP))
      minP = difference
  }
  return minP
}

/*

test([[3, 1, 2, 4, 3]], 1)
test([[-3, 1, -2, 4, 3]], 3)
test([[1, 1]], 0)
test([[9, 2]], 7)
test([[9, 2, 3]], 4)
test([[3, 2, 9]], 4)
*/
test([[3, 2, 9, -100]], 86)
/*

*/