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
