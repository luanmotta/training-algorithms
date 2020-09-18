let L, R, N

let cmds = []

let totalIndexes = 0
let testArray = []

const reset = () => {
  L = 0, R = 1
  cmds = []
}

const test = () => {
  if (L === N || R === N) {
    return cmds
  }
  reset()
}

const cmdL = () => {
    L = 2 * L - R
    cmds.push('L')
}

const cmdR = () => {
    R = 2 * R - L
    cmds.push('R')
}

const r = () => {

  testArray.push(0)
  if (lastPosition === true) {
    test()
  }

}


function solution(param) {
    N = param

    if (N === 0) {
      return ''
    }

    while (true) {
      reset()

      for (let i = 0; i < totalIndexes; i++) {
        testArray.push(0)
        testArray.push(0)
        test()
        testArray.push(1)
        test()
        testArray.push(1)
        testArray.push(0)
        test()
        testArray.push(1)
        test()
      }
      totalIndexes++
    }

    return cmds.join('')
}

// Tests
const test = (params, expected) => {
  const result = solution(...params), color = result === expected ? '\x1b[32m' : '\x1b[31m', reset = '\x1b[0m'
  console.log(`${params} | expected ${expected} get ${result}`, color, `${result === expected}\n`, reset)
}

test([-11], 'LLRL')
test([4], 'RR')
