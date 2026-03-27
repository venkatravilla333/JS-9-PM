
//declaration

// var a = 1

// function test() {
//   var a = 10
// }

// test()

//named
// var x = function test() {
//   var a = 100
// }

// x()

//anonymous
// var y = function() {
//   var a = 1000
// }

// y()

//arrow
// var z = ()=> {
//   var a = 10000
// }
// z()

//params vs arguments

// function test(a,b,c) {
//   console.log(a)
//   console.log(b)
//   console.log(c)

// }
// test(10, 20, 30)

//default param

// function test(a=10, b) {
//   console.log(a + b)
// }
// test(100)


// varying on of params and arguments

// function test(a, b) {
//   console.log(a,b)
//   // console.log(a + b + c)
//   console.log(arguments)
//   // console.log(arguments[0])
//   // console.log(arguments[1])
//   // console.log(arguments[2])
//   // console.log(arguments[3])
//   // console.log(arguments[4])
//   console.log(typeof arguments)
//   console.log(Array.isArray(arguments))
//   var sum = 0
//   for (var value of arguments) {
//     console.log(value)
//     sum += value
//   }
//   return sum
// }

// console.log(test(1, 2))


// var test = () => {
//   console.log(arguments)
// }
// test()

// function test(...num) {
//   console.log(num)
  // console.log(rest[0])
  // console.log(rest[1])
  // console.log(rest[2])
  // console.log(rest[3])
  // console.log(rest[4])
//   var sum = 0
//   for (var value of num) {
//     console.log(value)
//     sum += value
//   }
//   return sum
// }
// console.log(test(1, 2, 3, 4, 5))




//scope

//global

// //storage
// var a = 1

// let b = 2

// const c = 3

// //access

// console.log(a)
// console.log(b)
// console.log(c)

// function test() {
//   //storage
//   var d = 4
//   let e = 5
//   const f = 6

//   //access
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(d)
//   console.log(e)
//   console.log(f)

//   if (true) {
//     //storage
//     var g = 7
//     let h = 8
//     const i = 9
//     //access
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
//     console.log(e)
//     console.log(f)
//     console.log(g)
//     console.log(h)
//     console.log(i)
//   }
//   //access
//   console.log(g)
//   // console.log(h)
//   // console.log(i)
// }
// test()
// //access
// // console.log(d)
// // console.log(e)
// // console.log(f)
// // console.log(g)
// // console.log(h)
// // console.log(i)

// function test(){
//   var a = 10
//   console.log(a)
// }
// console.log(a)
// test()

//hoisting

// console.log(a)
// const a = 'sachin'
// console.log(a)

// console.log(b)
// var b = 40
// console.log(b)

// console.log(c)
// var c = true
// console.log(c)

// console.log(d)
// var d
// console.log(d)

// console.log(e)
// var e = null
// console.log(e)

// console.log(f)
// var f = { value: 100 }
// console.log(f)

// console.log(g)
// var g = [1, 2, 3]
// console.log(g)


// console.log(h)
// var h = function test() {
//   console.log('named fun exp')
// }
// h()
// console.log(h)

// console.log(i)
// var i = function () {
//   console.log('anonymous fun exp')
// }
// console.log(i)

// console.log(j)
// var j = ()=> {
//   console.log('arrow fun exp')
// }
// console.log(j)

// console.log(declare)
// declare()
// function declare() {
//   console.log('declare')
// }
// console.log(declare)
// declare()


//var vs let vs const

//scope
//hoisting

//redeclartion
// const a = 10
// console.log(a)
// console.log(a)
// console.log(a)
// const a = 20
// console.log(a)
// console.log(a)
// console.log(a)

//reassignment

// var a = 10
// let a = 10
// const a = 10
// console.log(a)
// a = 20
// console.log(a)

//initialization

// var a
// let a
// const a = 10
// console.log(a)
// a = 10
// console.log(a)

// function outer() {
//   var a = 100
//   return a
//   var b = 200
//  return function inner() {
//     console.log(a)
//   }
// }

// var res = outer()
// console.log(res)

// var inner = outer()
// inner()
// console.log(a)
// console.log(x)
// var x = 1
// console.log(x)
// function test() {
//   console.log(x)
//   // var x = 10
//   console.log(x)
// }
// test()
// console.log(x)

//IIFE
// var a = 10

// (function test() {
//   var a = 10
// console.log(a)
// })()
// console.log(a)

// var a = 10
// let b = 20





