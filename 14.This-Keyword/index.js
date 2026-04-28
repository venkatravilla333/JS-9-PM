

// console.log(this)

// function test() {
//   console.log(this)
// }

// test()

// var test1 = ()=> {
//   console.log(this)
// }

// test1()


// var person1 = {
//   name: 'sachin',
//   age: 45,
//   outer1: ()=> {
//     console.log(this)
//     // var inner1 = function () {
//     //   console.log(this)
//     // }
//     var inner1 = function() {
//       console.log(this)
//     }
//     inner1()
//   },
 
// }

// person1.outer1()
// // person1.outer2()



// function Test(name, age) {
//   console.log(this)
//   this.name = name;
//   this.age = age;
//   this.outer = ()=> {
//     console.log(this)
//     var inner = ()=> {
//       console.log(this)
//     }
//     inner()
//   }
// }

// var obj1 = new Test('sachin', 45)
// obj1.outer()


// class Test{
//   constructor(name, age) {
//     console.log(this)
//     this.name = name;
//     this.age = age;
//     this.outer = function () {
//       console.log(this)
//       var inner = function() {
//         console.log(this)
//       }
//       inner()
//     }
//   }
// }

// var person1 = new Test('sachin', 45)
// console.log(typeof Test)
// person1.outer()



// var person = {
//   name: 'sachin',
//   age: 45
// }

// function test(a,b,c) {
//   console.log(this)
//   console.log(a,b,c)
// }
// var test = (a,b,c)=> {
//   console.log(this)
//   console.log(a,b,c)
// }
// test(1,2,3)
// test.call(person, 1,2,3)
// test.apply(person, [1,2,3])
// test.bind(person, 1,2,3)()


// var person = {
//   name: 'sachin',
//   age: 45,
//   outer: function () {
//     var inner = ()=> {
//       console.log(this)
//     }
//     inner()
    // inner.call(person, 1,2,3)
    // inner.apply(person, [])
//     // inner.bind(person)()
//   }
// }

// person.outer()


// function Test(name, age) {
//   this.name = name;
//   this.age = age;
//   this.outer = function () {
//     var inner = ()=> {
//       console.log(this)
//     }
//     inner()
//     // inner.call(person)
//     // inner.apply(person)
//     // inner.bind(person)()
//   }
// }

// var person = new Test('sachin', 45)
// person.outer()


// class Test{
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.outer = function () {
//       var inner = function () {
//         console.log(this)
//       }
//       inner()
//     }
//   }
   
// }
// var person = new Test('sachin', 45)
// person.outer()