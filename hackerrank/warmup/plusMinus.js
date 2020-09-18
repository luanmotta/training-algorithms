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

const round = (n, total) => {
  return Math.round(n/total*1000000)/1000000
}

function solution(arr) {
  const total = arr.shift()
  let positive = 0, negative = 0, zeros = 0
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i]
    if (n > 0) {
      positive++
    } else if (n < 0) {
      negative++
    } else {
      zeros++
    }
  }
  return [round(positive, total), round(negative, total), round(zeros, total)]
}

/*

*/
test([[6, -4, 3, -9, 0, 4, 1]], [0.500000, 0.333333, 0.166667])
/*

*/