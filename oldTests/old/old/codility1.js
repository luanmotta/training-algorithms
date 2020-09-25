// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, F) {
    const diff = []

    const arrayLength = A.length

    for (let i = 0; i < arrayLength; i++) {
        diff[i] = A[i] - B[i]
    }

    const frontEndIndexes = []

    for (let i = 0; i < F; i++) {
        let maxValue = diff[0]
        let pos = 0
        diff.forEach((item, index) => {
            if (item > maxValue) {
                maxValue = item
                pos = index + i
            }
        })
        diff.splice(pos, 1)

        frontEndIndexes.push(pos)
    }

    let sum = 0

    for (let i = 0; i < arrayLength; i++) {
        if (frontEndIndexes.length >= 1 && frontEndIndexes[0] === i) {
            frontEndIndexes.shift()
            sum += A[i]
        } else {
            sum += B[i]
        }
    }
    return sum
}


console.log(solution([4, 2, 1], [2, 5, 3], 2))

