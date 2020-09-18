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

function solution(init, end, jump) {
  if (init === end)
    return 0
  const distance = end - init
  let jumps = distance / jump
  let trunc = Math.trunc(jumps)
  if (trunc < jumps)
    return trunc + 1
  return trunc
}

/*

*/
test([10, 85, 30], 3)
test([0, 3, 1], 3)
test([0, 3, 3], 1)
test([0, 3, 50], 1)
test([1, 1, 0], 0)
test([5, 10, 2], 3)

/*

*/