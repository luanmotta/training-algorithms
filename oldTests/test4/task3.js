const equals = (result, expected) => {
  if (typeof expected === 'object') {
    for (let i = 0; i < result.length || i < expected.length; i++) {
      if (result[i] !== expected[i]) {
        return false
      }
    }
    return true
  } else {
    return result === expected
  }
}

// Tests
const test = (params, expected) => {
  const result = solution(...params), color = equals(result, expected) ? '\x1b[32m' : '\x1b[31m', reset = '\x1b[0m'
  console.log(`${params} | expected ${expected} get ${result}`, color, `${equals(result, expected)}\n`, reset)
}


/*

There is a popular saying that goes: "The friends of my friends are my friends".
A friendship is represented in the form "PersonA:PersonB", which means that PersonA and PersonB are friends. Given two such relations, for example, "PersonA:PersonB" and "PersonB:PersonC", and taking the saying into account means that PersonA is friends with PersonB and PersonC, PersonB is friends with PersonA and PersonC and PersonC is friends with PersonA and PersonB.
Now, write a function that, given an array of such relations as the first parameter, calculates the total number of friends for the array of people given as the second parameter.

(["Anne:Barbara","Barbara:Ivan", "Vinny:Vlad"], ["Anne", "Vinny"], 'Anne: 2, Vinny: 1')

*/

function chain(obj, key, stack) {
  stack[key] = true
  obj[key].forEach(value => {
    if (!stack[value]) {
      chain(obj, value, stack)
    } else {
      obj[key] = new Set([...Array.from(obj[key]), ...Array.from(obj[value])])
    }
  })
}

function solution(relations, people) {
  let obj = {}
  for (let i = 0; i < relations.length; i++) {
    let [first, second] = relations[i].split(':')
    if (!obj[first]) {
      obj[first] = new Set()
    }
    if (obj[first].has(second) === false) {
      obj[first].add(second)
    }
    if (!obj[second]) {
      obj[second] = new Set()
    }
    if (obj[second].has(first) === false) {
      obj[second].add(first)
    }
  }

  const keys = Object.keys(obj)
  for (let i = 0; i < Object.keys(obj).length; i++) {
    chain(obj, keys[i], {})
  }

  let resultString = ''
  for (let i = 0; i < people.length; i++) {
    if (i > 0) {
      resultString += ', '
    }
    resultString += `${people[i]}: ${obj[people[i]].size - 1}`
  }
  return resultString
}

/*
*/
test([["Anne:Barbara"], ["Anne"]], 'Anne: 1')
test([["Anne:Barbara","Barbara:Ivan", "Vinny:Vlad"], ["Anne", "Vinny"]], 'Anne: 2, Vinny: 1')
test([["Anne:Barbara","Ivan:Barbara", "Vinny:Vlad"], ["Anne", "Vinny"]], 'Anne: 2, Vinny: 1')
test([["Anne:Barbara","Barbara:Ivan", "Vinny:Vlad"], ["Anne", "Vinny"]], 'Anne: 2, Vinny: 1')

test([["Octavia:Zoltan", "Zoltan:Marko", "Marko:Diego", "Diego:Andres"], ["Octavia", "Diego"]], 'Octavia: 4, Diego: 4')
test([["Vanja:Sergio", "Sergio:Pedro", "Pedro:Martin", "Martin:Pablo", "Pablo:Sergio", "Jelena:Ivan", "Jelena:Alan", "Alan:Tomislav"],["Tomislav", "Martin"]], 'Tomislav: 3, Martin: 4') // Tomislav: 3, Martin: 4
test([["Alvaro:Alex", "Roman:Nikola", "Octavia:Barbara", "Joao:Marko", "Luis:Vanja", "Gabriel:Gustavo", "Alan:Pablo", "Ivan:Andres", "Artem:Anne", "Martin:Alessandro", "Sebastian:Vinny", "Eduardo:Francis", "Zoltan:Vlad"], ["Zoltan", "Ivan"]], 'Zoltan: 1, Ivan: 1') // Zoltan:1, Ivan: 1
test([["David:Francis", "Francis:Alessandro", "Alessandro:Ivan", "Tomislav:Ivan", "Anne:Tomislav", "Anne:David", "Francis:Tomislav"], ["Francis", "David"]], 'Francis: 5, David: 5') // Francis: 5, David: 5
test([["Alessandro:Anna", "Anna:Anne", "Anne:Barbara", "Barbara:David", "David:Francis", "Francis:Eduardo", "Eduardo:Anna", "Eduardo:Alessandro", "Luis:Marko", "Joao:Vlad", "Vlad:Luka", "Luka:Nikola", "Nikola:Roman", "Vlad:Roman", "Vlad:Vinny", "Vinny:Roman", "Vlad:Andres", "Vinny:Ivan"], ["Barbara", "Joao"]], 'Barbara: 6, Joao: 7') // Barbara: 6, Joao: 7
/*

*/