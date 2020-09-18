let action = 0, count = 1, max = 0

function solution(array) {
  if (array.length === 1)
      return 1

  for (let i = 1; i < array.length; i++) {
      let prev = array[i - 1], curr = array[i]

      if (prev < curr) {
          if (action !== 1) {
              action = 1
              count++
          }
      } else if (prev > curr) {
          if (action !== -1) {
              action = -1
              count++
          }
      } else {
          action = 0
          count = 1
      }
      if (max < count) {
          max = count
      }
  }
  return max
}
console.log(solution([9, 4, 2, 10, 7, 8, 8, 1, 9])) // 5
console.log(solution([4, 8, 12, 16]))// 2
console.log(solution([100]))// 1
console.log(solution([ 50, 150, 50, 150, 50, 150, 50, 150, 50, 150]))// 10