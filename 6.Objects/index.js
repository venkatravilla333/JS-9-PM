//how to create object

//literal syntax

// var person1 = {
//   name: 'sachin',
//   age: 45,
//   city: 'mumbai',
//   play: function () {
//     console.log('play')
//   }
// }
// console.log(person1)

// var person2 = {
//   name: 'kohli',
//   age: 35,
//   city: 'delhi',
//   play: function () {
//     console.log('play')
//   }

// }
// console.log(person2)

//how to create objects dynamically

//Constructor function way (ES-5)

// function Test(name, age, city) {
//   // console.log(this)
//   this.name = name;
//   this.age = age;
//   this.city = city;
//   this.play = function () {
//     console.log('play')
//   }
// }
// var person1 = new Test('sachin', 45, 'Mumbai')
// console.log(person1)
// var person2 = new Test('kohli', 35, 'Delhi')
// console.log(person2)
// var person3 = new Test('dhoni', 40, 'Ranchi')
// console.log(person3)

//Classical way (ES-6)

// class test{
//   constructor(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.play = function () {
//       console.log('play')
//     }
//   }
// }

// console.log(typeof test)
// var person1 = new test('sachin', 45, 'Mumbai')
// console.log(person1)
// var person2 = new test('kohli', 35, 'Delhi')
// console.log(person2)
// var person3 = new test('dhoni', 40, 'Ranchi')
// console.log(person3)
// console.log(new test('gill', 20, 'mumbai'))

// var person = {
//   name: 'sachiin',
//   age: 45,
//   city: 'mumbai',
//   play: function () {
//     console.log('play')
//   }
// }

// console.log(person)

//without using loop

// console.log(person.name)
// console.log(person.age)
// console.log(person.city)
// person.play()

// with using loop

// console.log(person)

// for (var keys in person) {
//   console.log(keys, person[keys])
// }

// var keys = Object.keys(person)
// var values = Object.values(person)
// var entries = Object.entries(person)
// console.log(keys)
// console.log(values)
// console.log(entries)

//copy

// var x = 10
// console.log(x)

// var y = x
// y = 20
// console.log(y)


//object

// var orginalObj = {
//   name: 'sachiin',
//   address: {road: 101},
//   play: function () {
//     console.log('play')
//   }
// }

// console.log(orginalObj)

//normal copy

// var copiedObj = orginalObj //normal copy
// copiedObj.name = 'kohli'
// copiedObj.address.road = 201

// console.log(orginalObj)
// console.log(copiedObj)

// import lodash from 'lodash'
// let lodash = require('lodash')
//
// var copiedObj = JSON.parse(JSON.stringify(orginalObj)) //deep copy
// var copiedObj = lodash.cloneDeep(orginalObj) //deep copy

// var copiedObj = Object.assign({}, orginalObj) //shallow copy (ES-5)
// var copiedObj = {...orginalObj} //shallow copy (ES-6)

// copiedObj.name = 'kohli'
// copiedObj.address.road = 201

// console.log(orginalObj)
// console.log(copiedObj)

//template string

// var name = 'sachin'
// var age = 45

// console.log('Hi this is' + ' ' + name + ' ' + 'My age is' + ' ' + age) //ES-5
// console.log(`Hi this is ${name} My age is ${age}`) //ES-6
// console.log(
//   `Hi
//   Hello
//   Bye`)

// console.log(Math)

// console.log(Math.min(5,2,9))
// console.log(Math.max(5,2,9))
// console.log(Math.ceil(5.2))
// console.log(Math.ceil(5.9))
// console.log(Math.floor(5.2))
// console.log(Math.floor(5.9))
// console.log(Math.round(5.2))
// console.log(Math.round(5.5))
// console.log(Math.round(5.9))
// console.log(Math.random())

//Date object

// var now = new Date()
// console.log(now)

//get methods
// console.log(now.getFullYear())
// console.log(now.getDate())
// console.log(now.getMonth())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

//set methods

// now.setFullYear(2050)
// now.setMonth(6)
// now.setHours(8)
// console.log(now)

// var date1 = new Date(2040, 3, 9, 5, 20, 30)
// console.log(date1)
// console.log(date1.getFullYear())
// console.log(now.getDate())
// console.log(now.getMonth())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

//set methods

// date1.setFullYear(2070)
// date1.setMonth(6)
// date1.setHours(8)
// console.log(date1)
// console.log(date1)


//String object

var msg = 'Hi How are You'
console.log(msg)
// console.log(msg.length)//how to find string length

// console.log(msg.trimStart().length)//how to remove empty spaces
// console.log(msg.trimEnd().length)//how to remove empty spaces
// console.log(msg.trim().length)//how to remove empty spaces

//How to copy string

// console.log(msg.slice())
// console.log(msg.slice(0))
// console.log(msg.slice(0, 5))
// console.log(msg.slice(-5))

// console.log(msg.substring())
// console.log(msg.substring(0))
// console.log(msg.substring(0, 5))
// console.log(msg.substring(-5))

//How to extract a string char

// console.log(msg.charAt(0))
// console.log(msg.charCodeAt(0))

//How to convert string case

// console.log(msg.toUpperCase())
// console.log(msg.toLowerCase())






