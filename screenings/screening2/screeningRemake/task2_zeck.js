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

function solution(param) {
  // Add all chars to an array without duplicates
  let result = [...new Set(param.join('').replace(/>/g, '').split(''))]
  param.map(p => {
    const before = p.split('>')[0]
    const after  = p.split('>')[1]
    const i      = result.indexOf(after)
    // If the before char is not before the after char
    if (result[i - 1] !== before) {
      result.splice(result.indexOf(before), 1)
      if (i === 0)
        result.splice(0, 0, before)
      else
        result.splice(result.indexOf(after) - 1, 0, before)
    }
  })
  return result.join('')
}

/*

*/
test([["I>N","A>I","P>A","S>P"]], 'SPAIN')
test([["P>E","E>R","R>U"]], 'PERU')
test([["R>A","I>L","B>R","Z>I", "A>Z"]], 'BRAZIL')
/*

*/