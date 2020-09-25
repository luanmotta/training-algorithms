function solution(a, b) {
  return a + b
}

// Tests
const test = (params, expected) => {
  const result = solution(...params), color = result === expected ? '\x1b[32m' : '\x1b[31m', reset = '\x1b[0m'
  console.log(`(${params}) | expected ${expected}, got ${result}`, color, `${result === expected}\n`, reset)
}

test([55, 29], 84)
test([65, 55], 2)
test([555, 555], 3)
test([900, 11], 0)
test([145, 55], 2)
test([0, 0], 0)
test([1, 99999], 100000)
test([999045, 1055], 5)
test([101, 809], 1)
test([189, 209], 1)