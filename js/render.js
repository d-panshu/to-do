import { todos, currentFilter } from "./state.js";

const todoList = document.getElementById('todoList');

export function renderTodos(){
    todoList.innerHTML = '';

    let filtered= todos;

    if(currentFilter ==='completed'){
        filtered = todos.filter(todo => todo.completed);
    }
    else if(currentFilter ==='pending'){
        filtered = todos.filter(todo => !todo.completed);
    }

    filtered.forEach(todo =>{
        const li= document.createElement('li');
        li.className = `${todo.priority} ${todo.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <span>${todo.text}</span>
            <div>
                <button data-id="${todo.id}" class="toggle">${todo.completed ? 'Undo' : 'Complete'}</button>
                <button data-id="${todo.id}" class="delete">Delete</button>
            </div>
        `;
        todoList.appendChild(li);
            
    
    });
}