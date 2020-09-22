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

const friendsOf = (friends, obj, stack) => {
  let subFriends = []
  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (stack.every((item) => item !== friend)) {
      stack.push(friend)
      subFriends = subFriends.concat(friendsOf(friend, obj, stack))
    }
  }
  return subFriends
}

function solution(relations, people) {
  const obj = {}
  for (let i = 0; i < relations.length; i++) {
    let [ a, b ] = relations[i].split(':')
    if (!obj[a]) {
      obj[a] = new Set()
    }
    obj[a].add(b)
  }
  for (let i = 0; i < relations.length; i++) {
    let [ b, a ] = relations[i].split(':')
    if (!obj[a]) {
      obj[a] = new Set()
    }
    obj[a].add(b)
  }
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const subFriends = friendsOf(key, obj, [key])
    for (let i = 0; i < subFriends.length; i++) {
      const element = array[i];
      obj[key].add(element)
    }
  }

  return obj
}

/*
test([["Anne:Barbara"], ["Anne"]], 'Anne: 1')
*/
test([["Anne:Barbara","Barbara:Ivan", "Vinny:Vlad"], ["Anne", "Vinny"]], 'Anne: 2, Vinny: 1')
/*
test([["Anne:Barbara","Ivan:Barbara", "Vinny:Vlad"], ["Anne", "Vinny"]], 'Anne: 2, Vinny: 1')
test([["Anne:Barbara","Barbara:Ivan", "Vinny:Vlad"], ["Anne", "Vinny"]], 'Anne: 2, Vinny: 1')

test([["Octavia:Zoltan", "Zoltan:Marko", "Marko:Diego", "Diego:Andres"], ["Octavia", "Diego"]], 'Octavia: 4, Diego: 4')
test([["Vanja:Sergio", "Sergio:Pedro", "Pedro:Martin", "Martin:Pablo", "Pablo:Sergio", "Jelena:Ivan", "Jelena:Alan", "Alan:Tomislav"],["Tomislav", "Martin"]], 'Tomislav: 3, Martin: 4') // Tomislav: 3, Martin: 4
test([["Alvaro:Alex", "Roman:Nikola", "Octavia:Barbara", "Joao:Marko", "Luis:Vanja", "Gabriel:Gustavo", "Alan:Pablo", "Ivan:Andres", "Artem:Anne", "Martin:Alessandro", "Sebastian:Vinny", "Eduardo:Francis", "Zoltan:Vlad"], ["Zoltan", "Ivan"]], 'Zoltan: 1, Ivan: 1') // Zoltan:1, Ivan: 1
test([["David:Francis", "Francis:Alessandro", "Alessandro:Ivan", "Tomislav:Ivan", "Anne:Tomislav", "Anne:David", "Francis:Tomislav"], ["Francis", "David"]], 'Francis: 5, David: 5') // Francis: 5, David: 5
test([["Alessandro:Anna", "Anna:Anne", "Anne:Barbara", "Barbara:David", "David:Francis", "Francis:Eduardo", "Eduardo:Anna", "Eduardo:Alessandro", "Luis:Marko", "Joao:Vlad", "Vlad:Luka", "Luka:Nikola", "Nikola:Roman", "Vlad:Roman", "Vlad:Vinny", "Vinny:Roman", "Vlad:Andres", "Vinny:Ivan"], ["Barbara", "Joao"]], 'Barbara: 6, Joao: 7') // Barbara: 6, Joao: 7

*/