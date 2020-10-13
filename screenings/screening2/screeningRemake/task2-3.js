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
  const result = [array[0][0], array[0][2]]
  array.shift()
  for (let i = 0; array.length; i++) {
    if (i === array.length) {
      i = 0
    }
    const elToInsert = array[i];
    for (let j = 0; j < result.length; j++) {
      const current = result[j];
      if (elToInsert[0] === current) {
        result.splice(j + 1, 0, elToInsert[2])
        array.splice(i, 1)
        i = 0
        break
      }
      if (elToInsert[2] === current) {
        result.splice(j, 0, elToInsert[0])
        array.splice(i, 1)
        i = 0
        break
      }
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