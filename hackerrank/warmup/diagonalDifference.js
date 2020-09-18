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

function solution(arr) {
  // Write your code here
  let lines = arr.shift()
  let left = 0
  let right = 0
  let matrix = new Array(lines)
  for (let i = 0; i < lines; i++) {
      matrix[i] = new Array()
  }

  for (let i = 0; i < arr.length; i++) {
      let position = Math.trunc(i / lines)
      matrix[position].push(arr[i])
  }

  const columns = matrix[0].length - 1

  for (let i = 0; i < matrix.length; i++) {
    left += matrix[i][i]
    right += matrix[i][columns - i]
  }

  return Math.abs(left - right)
}

/*

*/
test([[3, 11, 2, 4, 4, 5, 6, 10, 8, -12]], 15)
/*

*/