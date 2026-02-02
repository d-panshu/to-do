import { loadTodos } from "./storage.js";
import { renderTodos } from "./render.js";
import { addTodo, toggleTodo, deleteTodo } from "./actions.js";
import { setFilter } from "./state.js";


const todoInput = document.getElementById("todoInput");
const prioritySelect = document.getElementById("priority");
const addBtn = document.getElementById("addBtn");
const filterButtons = document.querySelectorAll(".filters button");
const todoList = document.getElementById("todoList");


addBtn.addEventListener("click", () => {
    if (!todoInput.value.trim()) return;
    addTodo(todoInput.value.trim(), prioritySelect.value);
    todoInput.value = '';
});

todoInput.addEventListener("keydown", (e) => {
    if(e.key ==="Enter") addBtn.click();
});


filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        setFilter(button.dataset.filter);
        renderTodos();
    });
});

todoList.addEventListener("click", (e) => {
    const id = parseInt(e.target.dataset.id);
    if (e.target.classList.contains("toggle")) {
        toggleTodo(id);
    } else if (e.target.classList.contains("delete")) {
        deleteTodo(id);
    }
});



loadTodos();
renderTodos();