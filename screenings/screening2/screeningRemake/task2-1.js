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

function solution(A) {
  const result = [A[0][0], A[0][2]]
  A.shift()
  for (let i = 0; i < A.length; i++) {
    let index
    let first = A[i][0]
    let second = A[i][2]
    index = result.findIndex(v => v === first)
    if (index === -1) {
      index = result.findIndex(v => v === second)
      if (index !== -1) {
        result.splice(index, 0, first)
      }
    } else {
      result.splice(index + 1, 0, second)
    }
    if (index !== -1) {
      A.splice(i, 1)
      i--
    }
    if (i === A.length - 1) {
      i = -1
    }
  }
  return result.join('')
}

/*
*/

test([["L>E","C>H", "I>L", "H>I"]], 'CHILE')
test([["U>A","E>U"]], 'EUA')
test([["I>N","A>I","P>A","S>P"]], 'SPAIN')
test([["P>E","E>R","R>U"]], 'PERU')
test([["R>A","I>L","B>R","Z>I", "A>Z"]], 'BRAZIL')
/*

*/