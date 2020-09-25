const palindromoIterativo = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1])
      return false
  }
  return true
}

const palindromoRecursivo = (str, index = 0) => {
  if (str[index] === str[str.length - index - 1]) {
    if (index === str.length - 1)
      return true
    return palindromoRecursivo(str, index + 1)
  }
  else
    return false
}

const arg = process.argv[2]

if (!arg || typeof arg !== 'string')
  return false

const str = arg.toUpperCase()

const result1 = palindromoIterativo(str)
const result2 = palindromoRecursivo(str)

console.log(result1)
console.log(result2)
