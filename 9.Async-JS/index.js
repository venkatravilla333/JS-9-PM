
// console.log('Hi')

// setTimeout(() => {
//   console.log('Timer-1')
// }, 4000)

// console.log('Hello')

// setTimeout(() => {
//   console.log('Timer-2')
// }, 2000)

// console.log('Kohli')

// setTimeout(() => {
//   console.log('Timer-3')
// }, 0)

// Promise.resolve().then(()=>{console.log('pr-1')}).then(()=>{console.log('pr-2')})

// console.log('Bye')


function fetchData(displayData) {
  setTimeout(() => {
    var data = 'Data from db'
    displayData(data)
  }, 4000)
}

var displayData = (data) => {
  console.log(data)
}
fetchData(displayData)

// function displayData(data) {
//   console.log(data)
// }
// displayData()



