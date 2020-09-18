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
  let counters1 = []
  let counters2 = []
  let values1 = {}
  let values2 = {}
  let equiCounter = 0

  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    counters2[element] = (counters2[element] || 0) + 1
    if (!values2[counters2[element]]) {
      values2[counters2[element]] = {}
    }
    values2[counters2[element]][element] = true
    if (values2[counters2[element] - 1]) {
      delete values2[counters2[element] - 1][element]
    }
  }

  for (let i = 0; i < array.length - 1; i++) {
    const element = array[i]
    counters1[element] = (counters1[element] || 0) + 1

    if (!values1[counters1[element]]) {
      values1[counters1[element]] = {}
    }
    values1[counters1[element]][element] = true
    if (values1[counters1[element] - 1]) {
      delete values1[counters1[element] - 1][element]
    }

    delete values2[counters2[element]][element]
    if (!Object.keys(values2[counters2[element]]).length) {
      delete values2[counters2[element]]
    }
    if (values2[counters2[element] - 1]) {
      values2[counters2[element] - 1][element] = true
    }
    counters2[element] = counters2[element] - 1

    let keys1 = Object.keys(values1)
    let obj1 = values1[keys1[keys1.length - 1]]
    let keys11 = Object.keys(obj1)

    let keys2 = Object.keys(values2)
    let obj2 = values2[keys2[keys2.length - 1]]
    let keys22 = Object.keys(obj2)

    if (keys22.length === 1 && keys11.length === 1 && keys11[0] === keys22[0]) {
      equiCounter++
    }
  }

  return equiCounter
}

/*

*/
test([[4, 3, 4, 4, 4, 2]], 2)
/*

*/