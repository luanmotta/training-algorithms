const solution = (a, b) => {
  return a + b
}

// Tests
const test = (params, expected) => {
  const result = solution(...params)
  let isCorrect = null
  if (typeof expected === 'object') {
    for (let i = 0; i < result.length && i < expected.length; i++) {
      if (result[i] !== expected[i]) {
        isCorrect = false
      }
    }
    if (isCorrect === null) {
      isCorrect = true
    }
  } else {
    isCorrect = result === expected
  }
  color = isCorrect ? '\x1b[32m' : '\x1b[31m', reset = '\x1b[0m'
  console.log(`(${params}) | expected ${expected}; got ${result}`, color, `${isCorrect ? 'passed' : 'failed'}`, reset)
}



test([1, 2], 3)

/*

*/