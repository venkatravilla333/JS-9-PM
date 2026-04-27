

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


class Test{
  constructor(name, age) {
    console.log(this)
    this.name = name;
    this.age = age;
    this.outer = function () {
      console.log(this)
      var inner = function() {
        console.log(this)
      }
      inner()
    }
  }
}

var person1 = new Test('sachin', 45)
console.log(typeof Test)
person1.outer()