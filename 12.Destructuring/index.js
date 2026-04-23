

// var person = {
//   name: 'sachin',
//   age: 45,
//   address: { road: 101 },
//   properties: [{cash: 100000}, {bats: 10}]
// }
//without
// console.log(person.name)
// console.log(person.age)
// console.log(person.address.road)
// console.log(person.properties[0].cash)
// console.log(person.properties[1].bats)

// with

// var { name, age, address: { road }, properties: [{ cash }, { bats }] } = person
// console.log(name)
// console.log(age)
// console.log(road)
// console.log(cash)
// console.log(bats)

var arr = ['sachin', { age: 45 }, { bats: 10, cash: 100000 }, ['sara', 'arjun']]

//without

// console.log(arr[0])
// console.log(arr[1].age)
// console.log(arr[2].bats)
// console.log(arr[2].cash)
// console.log(arr[3][0])
// console.log(arr[3][1])

//with

var [name1, {age}, {bats, cash}, [name2, name3]] = arr
console.log(name1)
console.log(age)
console.log(bats)
console.log(cash)
console.log(name2)
console.log(name3)

