function solution(N) {
  const binary = []

  const recursive = (N) => {
      binary.unshift(N % 2)
      if (N > 1)
          recursive(Math.floor(N / 2))
  }

  recursive(N)

  let maxLength = 0, currLength = 0, countZeros = false, confirm = false

  binary.forEach(item => {
    if (item === 1) {
      confirm = countZeros
      countZeros = !countZeros
    }
    else if (countZeros)
      currLength++
    if (currLength > maxLength && confirm === true) {
      maxLength = currLength
      confirm = false
    }
  })

  return maxLength
}

console.log(solution(9)) // 2

console.log(solution(529)) // 4

console.log(solution(20)) // 1

console.log(solution(15)) // 0

console.log(solution(32)) // 0

console.log(solution(133)) // 4

console.log(solution(1)) // 0