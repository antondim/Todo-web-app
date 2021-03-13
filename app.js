//Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const completedList = document.querySelector(".completed-list");

//Event Listeners
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteNCheck);
completedList.addEventListener("click", deleteNCheck);

//Functions

// delete and check button event handler
function deleteNCheck(event) {
    const eventTarget = event.target;
    console.log(typeof(eventTarget));
    console.log(eventTarget);
    
    if (eventTarget.classList[0] == 'trash-btn') {
      eventTarget.parentElement.remove();
    }else if (eventTarget.classList[0] == 'completed-btn'){
        eventTarget.parentNode.className = "completed";
        eventTarget.parentNode.children[0].className = "completed-item";
        completedList.appendChild(eventTarget.parentNode);
        eventTarget.parentNode.removeChild(eventTarget);
    }
}

//addToDo event handler
function addToDo(event) {
    event.preventDefault();

    const todoDiv = document.createElement("div"); //container of each new todo
    todoDiv.classList.add("todo");

    //Create LI
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value; // get text from todoInput
    
    if (newToDo.innerText.length != 0) {
        newToDo.classList.add('todo-item'); // it's a 'todo-item' class' object
        todoDiv.appendChild(newToDo);
        
        //Create Check BUTTON
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('completed-btn');
        todoDiv.appendChild(completedButton);
       
        //Create Trash BUTTON
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        //Create Time Created BUTTON
        const timeIcon = document.createElement('img');
        timeIcon.innerHTML = ''
    
        todoList.appendChild(todoDiv);
        //Clear the value of input in the end
        todoInput.value = "";    
    }
}