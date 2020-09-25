function solution(n) {
  // Make binary
  let binary = ''
  do {
    binary = binary + (String(n % 2))
    n = Math.floor(n / 2)
  } while (n > 0)
  binary = binary.split('').reverse().join('')

  // Look for gaps (array)
  let binaryGaps = [], startGap = false, counter = 0
  for (let i = 0; i < binary.length; i++) {
    if (startGap) {
      if (binary[i] === '0') {
        counter++
      } else if (counter > 0) {
        startGap = false
        binaryGaps.push(counter)
        counter = 0
      }
    }
    if (binary[i] === '1') {
      startGap = true
    }
  }
  // Find the max gap length
  let maxGap = 0
  binaryGaps.forEach(gap => {
    if (gap > maxGap)
      maxGap = gap
  })
  return Number(maxGap)
}
/*
9/2 = 4, sobra 1
4/2 = 2, sobra 0
2/2 = 1, sobra 0
1/2 = 0, sobra 1
*/

// Tests
const test = (params, expected) => {
  const result = solution(...params), color = result === expected ? '\x1b[32m' : '\x1b[31m', reset = '\x1b[0m'
  console.log(`(${params}) | expected ${expected}, got ${result}`, color, `${result === expected}`, reset)
}

test([9], 2)
test([0], 0)
test([1], 0)
test([7], 0)
test([10], 1)
test([529], 4)
test([1041], 5)

/*
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

class Solution { public int solution(int N); }

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
*/