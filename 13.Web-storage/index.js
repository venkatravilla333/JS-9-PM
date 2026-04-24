

// console.log(window.localStorage)
// console.log(window.sessionStorage)

//store data

var storeBtn = document.getElementById('storedata')

function storeDataFun() {
  localStorage.setItem('name', 'kohli')
  localStorage.setItem('age', 35)
  sessionStorage.setItem('name', 'kohli')
  sessionStorage.setItem('age', 35)
}

storeBtn.addEventListener('click', storeDataFun)

//get data

var getBtn = document.getElementById('getdata')
var body = document.getElementById('body')

function getDataFun() {
  var name = localStorage.getItem('name')
  var age = localStorage.getItem('age')
  // var name = sessionStorage.getItem('name')
  // var age = sessionStorage.getItem('age')

  var h4 = document.createElement('h4')
  var h5 = document.createElement('h5')

  h4.textContent = name 
  h5.textContent = age

  body.appendChild(h4)
  body.appendChild(h5)

  // sessionStorage.setItem('name')
  // sessionStorage.setItem('age')
}

getBtn.addEventListener('click', getDataFun)

//remove item

var removeBtn = document.getElementById('removedata')

function removeDataFun() {
  //  localStorage.removeItem('name')
  //  localStorage.removeItem('age')
   sessionStorage.removeItem('name')
   sessionStorage.removeItem('age')
}

removeBtn.addEventListener('click', removeDataFun)

//clear data

var clearBtn = document.getElementById('cleardata')

function clearDataFun() {
  localStorage.clear()
  sessionStorage.clear()
}

clearBtn.addEventListener('click', clearDataFun)

