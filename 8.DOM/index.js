
// //How to examine dom

// // console.log(document)
// // console.dir(document)

// //How read dom properties

// // console.log(document.doctype)
// // console.log(document.all)
// // console.log(document.URL)
// // console.log(document.links)
// // console.log(document.forms)
// // console.log(document.images)

// //How to access dom nodes into js file

// //ID
// // var para = document.getElementById('mypara1')
// // console.log(para)

// // para.style.background = 'blue'
// // para.textContent = 'Hello'

// //Class

// // var paras = document.getElementsByClassName('myclass')

// // console.log(paras[0])
// // console.log(paras[1])
// // paras[0].style.background = 'red'
// // paras[1].style.background = 'red'

// //Tagname

// // var paras = document.getElementsByTagName('p')
// // console.log(paras)
// // console.log(paras[0])
// // console.log(paras[1])
// // paras[0].style.background = 'red'
// // paras[1].style.background = 'red'


// //QuerySelector

// // var x = document.querySelector('#mypara1')
// // var x = document.querySelector('.myclass')
// // var x = document.querySelector('p')
// // console.log(x)

// //QuerySelectorAll

// // var x = document.querySelectorAll('#mypara1')
// // var x = document.querySelectorAll('.myclass')
// // var x = document.querySelectorAll('p')
// // console.log(x)

// //Traversing of DOM

// // var mydiv = document.getElementById('mydiv')
// // console.log(mydiv)
// // mydiv.style.background = 'blue'

// // parent

// // var parent = mydiv.parentElement
// // console.log(parent)
// // parent.style.background = 'red'

// //Sibs

// // var preSib = mydiv.previousElementSibling
// // console.log(preSib)
// // preSib.style.background = 'yellow'

// // var nextSib = mydiv.nextElementSibling
// // console.log(nextSib)
// // nextSib.style.background = 'yellow'


// //childs

// // var firstChild = mydiv.firstElementChild

// // console.log(firstChild)

// // firstChild.style.background = 'green'
// // firstChild.style.color = 'white'

// // var lastChild = mydiv.lastElementChild

// // console.log(lastChild)

// // lastChild.style.background = 'green'
// // lastChild.style.color = 'white'

// // var allChilds = mydiv.children

// // console.log(allChilds)

// // allChilds[0].style.background = 'green'
// // allChilds[1].style.background = 'yellow'
// // allChilds[2].style.background = 'red'

// // for (var x of allChilds) {
// //   x.style.background = 'yellow'
// // }


// //How to attach events to dom nodes

// // var btn = document.getElementById('btn')
// // console.log(btn)

// // btn.addEventListener('click', ()=> {
// //   console.log('clicked')
// // })

// //api call

// // var data = 'DATA FROM DB'
// // console.log(data)

// // var h1 = document.createElement('h1')
// // console.log(h1)

// // h1.innerText = data

// // var body = document.getElementById('body')

// // console.log(body)

// // body.appendChild(h1)

// // var para = document.createElement('p')
// // console.log(para)

// // para.textContent = 'This is para'

// // // body.appendChild(para)
// // body.insertBefore(para, h1)


// // var h4 = document.createElement('h4')

// // h4.textContent = 'This heading four'

// // console.log(h4)


// // var addBtn = document.getElementById('add')

// // var body = document.getElementById('body')

// // function addBtnFun() {
// //   body.appendChild(h4)
// // }

// // addBtn.addEventListener('click', addBtnFun)

// // //update dom

// // var para = document.createElement('p')

// // para.innerText = 'This is para'

// // var updateBtn = document.getElementById('update')

// // function updateBtnFun() {
// //   console.log('update')
// //   body.replaceChild(para, h4)
// // }

// // updateBtn.addEventListener('click', updateBtnFun)


// // //delete

// // var deleteBtn = document.getElementById('delete')

// // function deleteBtnFun() {
// //   // console.log('delete')

// //   // h4.remove()

// //   body.removeChild(h4)
// // }
// // deleteBtn.addEventListener('click', deleteBtnFun)


// var subChild = document.getElementById('subchild')


// function sunChildFun(e) {
//   console.log('Subchild')
//   console.log(e)
//   console.log(e.target)
//   // e.stopPropagation()
//   console.log(e.clientX)
//   console.log(e.clientY)
//   console.log(e.offsetX)
//   console.log(e.offsetY)
// }

// subChild.addEventListener('click', sunChildFun)

// var child = document.getElementById('child')

// function childFun(e) {
//   console.log('child')
//   console.log(e)
// }
// child.addEventListener('click', childFun)

// var parent = document.getElementById('parent')

// function parentFun(e) {
//   console.log('parent')
//   console.log(e)
// }
// parent.addEventListener('click', parentFun)



//event delegation

// var table = document.getElementById('table')


// function tableFun(e) {
//   console.log(e.target)
// }

// table.addEventListener('click', tableFun)


var btn = document.getElementById('btn')

function btnClick() {
  console.log('clicked')
}
btn.addEventListener('click', btnClick)










