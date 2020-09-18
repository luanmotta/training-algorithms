/*
65 + 55 =>
1st column: 5 + 5 = 0 (1 is carried)
2nd column: 6 + 5 + 1 (carried) = 2 (1 is carried)
3rd column: 1 (carried) = 1
=> 120 (2 carry operations)
*/

const toArrayOfNumbers = (n) => {
  const array = String(n).split('').reverse()
  return array.map(string => Number(string))
}

const solution = (n1, n2) => {
  const array1 = toArrayOfNumbers(n1)
  const array2 = toArrayOfNumbers(n2)

  let carryCounter = 0
  let lastCarry = 0

  for (let i = 0; true; i++) {
    if (array1[i] === undefined || array2[i] === undefined) {
      if (lastCarry && array1[i] !== undefined) {
        if ((array1[i] + lastCarry) >= 10) {
          carryCounter++
          lastCarry = 1
        }
      } else if (lastCarry && array2[i] !== undefined) {
        if ((array2[i] + lastCarry) >= 10) {
          carryCounter++
          lastCarry = 1
        }
      } else {
        break
      }
    } else if ((array1[i] + array2[i] + lastCarry) >= 10) {
      carryCounter++
      lastCarry = 1
    } else {
      lastCarry = 0
    }
  }
  return carryCounter
}


// Tests
const test = (params, expected) => {
  const result = solution(...params), color = result === expected ? '\x1b[32m' : '\x1b[31m', reset = '\x1b[0m'
  console.log(`${params} | expected ${expected} get ${result}`, color, `${result === expected}\n`, reset)
}


test([65, 55], 2)
test([5, 5], 1)
test([59, 50], 1)
test([95, 5], 2)


test([123, 456], 0)
test([555, 555], 3)
test([900, 11], 0)
test([145, 55], 2)
test([0, 0], 0)
test([1, 99999], 5)
test([999045, 1055], 5)
test([101, 809], 1)
test([189, 209], 1)
