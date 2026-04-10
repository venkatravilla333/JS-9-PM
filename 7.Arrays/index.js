

// var arr = [1, 2, 3, 4, 5]
// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

//How to add new values to array

//starting
// arr.unshift(0)
// console.log(arr)
//ending
// arr.push(6)
// console.log(arr)

//anywhere

// arr.splice(0, 0, 0)
// arr.splice(arr.length, 0, 6)
// arr.splice(3, 0, 'Hi')
// console.log(arr)

//How to delete array values

// arr.shift()
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.splice(0, 2)
// arr.splice(0, 2, 'bye')
// arr.splice(arr.length-1, 1)
// console.log(arr)
// arr.splice(2, 2)
// console.log(arr)

//How to delete all values from array

// arr.length = 0

// arr.splice(0, arr.length)

// arr = []

// console.log(arr)

//How to find array values

// array has primitives

// var arr = [1, 2, 3, 4, 5, 2]

// console.log(arr)

// console.log(arr.indexOf(2))
// console.log(arr.indexOf(20))
// console.log(arr.lastIndexOf(2))
// console.log(arr.lastIndexOf(20))
// console.log(arr.includes(2))
// console.log(arr.includes(20))


// var arr = [{ course: 'html' }, { course: 'css' }, { course: 'java' }, { course: 'java' }]

// var res = arr.find((obj) => {
//   return obj.course === 'react'
// })

// console.log(res)

// var res = arr.findIndex((obj) => {
//   // return obj.course === 'react'
//   return obj.course === 'java'
// })

// console.log(res)

// var res = arr.findLastIndex((obj) => {
//   return obj.course === 'react'
//   // return obj.course === 'java'
// })

// console.log(res)


//How to merge two or more arrays into one array

// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = [6, 7, 8, 9, 10]

// console.log(arr1)
// console.log(arr2)
//ES-5
// var combineArr = arr1.concat(arr2)
// console.log(combineArr)
//ES-6
// var combineArr = [...arr1, ...arr2]
// console.log(combineArr)


// var arr = [1, 2, 3, 4, 5]

// console.log(arr)

//Without using loop

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

//With using loop

// for (var value of arr) {
//   console.log(value)
// }
// for (var index in arr) {
//   console.log(index, arr[index])
// }

// var res= arr.forEach((v, i) => {
//   return v
// })
// console.log(res)

//How to filter array values

// var arr = [1, 2, 3, 4, 5]
// var arr = [{course: 'html'}, {course: 'css'}, {course: 'java'}]

// console.log(arr)

// var filteredArr = arr.filter((obj) => {
//   // return value > 3
//   return obj.course === 'css'
// })

// console.log(filteredArr)


//map method

// var arr = [1, 2, 3, 4, 5]
// console.log(arr)

// var mapRes = arr.map((value) => {
//   return value * 100
// })

// console.log(mapRes)

// var forEachRes = arr.forEach((value) => {
//   console.log(value * 100)
// })

// console.log(forEachRes)

// var arr = [1, 2, 3, 4, 5]

// var reduceRes = arr.reduce((cum, cur) => {
//   return cum + cur
  
// }, 100)

// console.log(reduceRes)


//how to remove duplicates from array

// var arr = [1, 2, 3, 4, 5, 3]
// console.log(arr)

// var uniqueArr = [...new Set(arr)]
// console.log(uniqueArr)

// var uniqueArr = []

// function removeDuplicates(arr) {
//   for (var value of arr) {
//     console.log(value)
//     if (uniqueArr.indexOf(value) === -1) {
//         uniqueArr.push(value)
//     }
//   }
// }
// removeDuplicates(arr)

// console.log(uniqueArr)


//How to flatten array

// var arr = [1, 2, [10, 20], [100, 200, [1000, 2000]]]
// console.log(arr)

// // var flattenArr = arr.flat(Infinity)
// // console.log(flattenArr)

// var flattenArr = []

// function flattenFun(arr) {
//   for (var value of arr) {
//     // console.log(value)
//     if (Array.isArray(value)) {
//       flattenFun(value)
//     } else {
//       flattenArr.push(value)
//     }
//   }
// }
// flattenFun(arr)

// console.log(flattenArr)














