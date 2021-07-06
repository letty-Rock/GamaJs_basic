const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')

const newListInput = document.querySelector('[data-new-list-input]')

let lists = [{
  Id: 1,
   name : 'html'
},{
   id: 2,
  name: 'js'
}]


newListForm.addEventListener('submit',function(e){
  e.preventDefault[]
  const listName = newListInput.nodeValue
  if (listName === null || listName ==='') return 
  const list = createList(listName)
  newListInput.value = null
  lists.push(list)


})

function render() {
  lists.forEach(function (list) {
    const item = document.createElement('li')
    item.classList.add
    item.innerText = list
    listContainer.appendChild(item)
  })
}
function render()
function createList(name) {}
