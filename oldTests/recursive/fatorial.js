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

const fatorial = (n, total) => {
  total *= n
  n--
  if (n > 1)
    return fatorial(n, total)
  return total
}

function solution(n) {
  if (n === 0) return 1
  let total = 1
  return fatorial(n, total)
}

/*

*/
test([0], 1)
test([1], 1)
test([2], 2)
test([3], 6)
test([4], 24)
test([5], 120)
/*

*/