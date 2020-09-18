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
  let result = [arr[0][0], arr[0][2]]
  arr.shift()

  for (let i = 0;; i++) {
    let found = false
    if (!arr.length) {
      break
    }
    if (i >= arr.length) {
      i = 0
    }
    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr[i][0]) {
        result.splice(j + 1, 0, arr[i][2])
        found = true
        break
      } else if (result[j] === arr[i][2]) {
        result.splice(j, 0, arr[i][0])
        found = true
        break
      }
    }
    if (found) {
      arr.splice(i, 1)
      i--
    }
  }
  return result.join('')
}

/*

*/
test([["P>E","E>R","R>U"]], 'PERU')
test([["I>N","A>I","P>A","S>P"]], 'SPAIN')
test([["U>A","E>U"]], 'EUA')
test([["L>E","C>H", "I>L", "H>I"]], 'CHILE')
test([["R>A","I>L","B>R","Z>I", "A>Z"]], 'BRAZIL')
/*

*/

