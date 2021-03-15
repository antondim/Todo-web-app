//Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const completedList = document.querySelector(".completed-list");

//Event Listeners
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", buttonActions);
completedList.addEventListener("click", buttonActions);

//Functions

const getDateNTime = () => {
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return {date:date,time:time};
}


//delete and check buttons handler
function buttonActions(event) {
    const eventTarget = event.target;
    
    switch(eventTarget.classList[0]){
        case 'trash-btn':
            eventTarget.parentElement.remove();
            break;
        case 'completed-btn':
            eventTarget.parentNode.className = "completed";
            eventTarget.parentNode.children[0].className = "completed-item";        
            eventTarget.parentNode.children[3].children[1].innerText = 'Date added: ' + getDateNTime().date + 
                                                                       '\nTime added: ' + getDateNTime().time;
            completedList.appendChild(eventTarget.parentNode);
            eventTarget.parentNode.removeChild(eventTarget);
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
        
        //Adding info about the time a task is created
        var timeCreatedInfo = document.createElement('span');
        timeCreatedInfo.innerText = 'Date added: ' + getDateNTime().date + 
                                    '\nTime added: ' + getDateNTime().time;
        timeCreatedInfo.classList.add('time-text');
        
        clockButton.appendChild(timeCreatedInfo);
        todoDiv.appendChild(clockButton);
        todoList.appendChild(todoDiv);
       
        //Clear the value of input in the end
        todoInput.value = "";    
    }
}