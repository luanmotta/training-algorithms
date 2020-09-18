const numberOfCarryOperations = (n1, n2) => {
  const stringN1 = String(n1), stringN2 = String(n2)
  const largestNumberLength = stringN1 >= stringN2 ? stringN1.length : stringN2.length
  let carryCount = 0, carry = 0
  for (let pos = largestNumberLength - 1, i = 1; pos >= 0; pos--, i++) {
    const n1Digit = Number(stringN1.charAt(pos))
    const n2Digit = Number(stringN2.charAt(pos))

    const result = n1Digit + n2Digit + carry
    const resultString = String(result)
    if (resultString.length > 1) {
      carryCount++
      carry = Number(resultString[0])
    }
  }
  console.log(carryCount)
}

/*
65 + 55 =>
1st column: 5 + 5 = 0 (1 is carried)
2nd column: 6 + 5 + 1 (carried) = 2 (1 is carried)
3rd column: 1 (carried) = 1
=> 120 (2 carry operations)
*/

// const results = numberOfCarryOperations(65, 55)

numberOfCarryOperations(123, 456) // 0
numberOfCarryOperations(555, 555) // 3
numberOfCarryOperations(900, 11) // 0
numberOfCarryOperations(145, 55) // 2
numberOfCarryOperations(0, 0) // 0
numberOfCarryOperations(1, 99999) // 5
numberOfCarryOperations(999045, 1055) // 5
numberOfCarryOperations(101, 809) // 1
numberOfCarryOperations(189, 209) // 1

