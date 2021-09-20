//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



//Event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//Functions

function addTodo(event){
event.preventDefault();
//add div element
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');
//add li element
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
//append li to div
todoDiv.appendChild(newTodo);
//add button element completed
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add('complete-btn');
//append button to div
todoDiv.appendChild(completedButton);
//add button element deleted
const deletedButton = document.createElement('button');
deletedButton.innerHTML = '<i class="fas fa-trash"></i>';
deletedButton.classList.add('deleted-btn');
//append button to div
todoDiv.appendChild(deletedButton);
//append todoDiv to ul
todoList.appendChild(todoDiv);
//clear input value
todoInput.value = "";
}


function deleteCheck(e){
    const item = e.target;
    if(item.classList.contains('deleted-btn')){
      item.parentElement.remove(); 
    }
    if(item.classList.contains('complete-btn')){
      item.parentElement.classList.toggle('completed');
    }
}
