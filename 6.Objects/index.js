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

var orginalObj = {
  name: 'sachiin',
  address: {road: 101},
  play: function () {
    console.log('play')
  }
}

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
