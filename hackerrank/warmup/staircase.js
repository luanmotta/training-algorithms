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

function solution(height) {
  const stair = []
  for (let i = 0; i < height; i++) {
    stair[i] = (new Array(height)).fill('')
  }
  for (let i = 0; i < height; i++) {
    for (let j = height - 1; j > height - 2 - i; j--) {
      stair[i][j] = '#'
    }
  }
  return stair
}

/*

test([3], [['', '', '#'], ['', '#', '#'], ['#', '#', '#']])
*/
test([6], [['', '', '', '', '', '#'], ['', '', '', '', '#', '#'], ['', '', '', '#', '#', '#'], ['', '', '#', '#', '#', '#'], ['', '#', '#', '#', '#', '#'], ['#', '#', '#', '#', '#', '#']])
/*

*/