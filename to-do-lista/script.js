const title = document.createElement('h1')

title.innerHTML = "Hello"

console.log(title);

const todoImputElement = document.getElementById('todo-input')

todoImputElement.before(title) /// cos co wstawia jakis element // za before 


const todoItem = document.createElement('li')

todoItem.innerHTML = 'buy a milk <button>x</button>' //

const todoList = document.getElementById('todo-list')

todoList.append(todoItem)

//funkcja dodajaca przycis do todo-list
function appendItemToList () { 
  //tworzenie elementu li
const todoItem = document.createElement('li')
//ustaw jego tekst na input.value 
todoItem.innerHTML = `${todoImputElement.value} <button> x </button>`
//dodaj nowo utworzony element do todo listy
todoList.append(todoItem)
//wyczysc input
todoImputElement.value = ""

}


//kliknij przycisk

const addButton = document.getElementById('todo-button')

 //na przycisniecie tego klawisza pokaz zawartosc inputa
addButton.addEventListener('click', function(event) {

 //tworzenie elementu li
const todoItem = document.createElement('li')
//ustaw jego tekst na input.value 
todoItem.innerHTML = `${todoImputElement.value} <button> x </button>`
//dodaj nowo utworzony element do todo listy
todoList.append(todoItem)
//wyczysc input
todoImputElement.value = ""

})

//wcisniecie enteru powoduje dodanie do listy
todoImputElement.addEventListener('keypress', function(event){
  
  if (event.key === 'Enter') {
    ///dodaj nowy element do listy
  }
  appendItemToList();
})

function appendItemToList () { 
   //tworzenie elementu li
const todoItem = document.createElement('li')
//ustaw jego tekst na input.value 
todoItem.innerHTML = `${todoImputElement.value} <button> x </button>`
//dodaj nowo utworzony element do todo listy
todoList.append(todoItem)
//wyczysc input
todoImputElement.value = ""
const button = todoItem.querySelector('button')
button.addEventListener('click', () => {
  todoItem.remove
})

}

//uswuanie elemntu ul > li > button <-- css
const deleteButtons = document.querySelectorAll('ul>li>button')

deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.parentElement.remove()
  })
})

//nasluchuj na cala tablice, i sprawdz co zostalo clikniete // delegacja zdarzen
todoList.addEventListener('click', (event) => {
  if(event.target.nodeName === 'BUTTON') {
    event.target.parentElement.remove()
  }
})

//elementy zostaja na stronie po odswiezeniu przegladaki - local storage
//zmienia sie lista - aktualizujemy liste dodanie elementu/usuniecie

function addToLocalStorage(text) {
  localStorage.setItem.('text', text)

}

