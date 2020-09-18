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
const rec = (result, obj, key) => {
  if (result[0] === key[0]) {
    result = result.unshift(obj[key])
  } else {
    result = result.push(obj[key])
  }
  delete obj[key]
}

function solution(A) {
  let result = []
  let obj = {}
  for (let i = 0; i < A.length; i++) {
    obj[A[i][0]] = A[i][2]
  }
  let keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    rec(result, obj, [keys[i]])
  }
  return result.join('')
}

/*
findWord() // SPAIN

*/
test([["P>E","E>R","R>U"]], 'PERU')
test([["I>N","A>I","P>A","S>P"]], 'SPAIN')

/*

*/