//Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const completedList = document.querySelector(".completed-list");

//Event Listeners
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", buttonActions);
completedList.addEventListener("click", buttonActions);
todoList.addEventListener("mouseover", saveElementTimes);
completedList.addEventListener("mouseover", saveElementTimes);


//Functions

function saveElementTimes(event) {
    const eventTarget = event.target;
    if (eventTarget.classList[0] === 'clock-btn') {
        console.log(eventTarget.timeStamp);
    }
}

function buttonActions(event) {
    const eventTarget = event.target;
    switch(eventTarget.classList[0]){
        case 'trash-btn':
            eventTarget.parentElement.remove();
            break;
        case 'completed-btn':
            eventTarget.parentNode.className = "completed";
            eventTarget.parentNode.children[0].className = "completed-item";
            completedList.appendChild(eventTarget.parentNode);
            eventTarget.parentNode.removeChild(eventTarget);
            break;
        case 'clock-btn':
            break;
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
        const clockButton = document.createElement('button');
        clockButton.innerHTML = '<i class="far fa-clock"></i>';
        clockButton.classList.add('clock-btn')
        todoDiv.appendChild(clockButton);

        todoList.appendChild(todoDiv);
        //Clear the value of input in the end
        todoInput.value = "";    
    }
}