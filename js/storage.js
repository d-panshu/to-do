import { setTodos } from  "./state.js";

export function loadTodos() {
    const data =localStorage.getItem('todos');
    setTodos(data ? JSON.parse(data) : []);
}

export function saveTodos(todos) {
   localStorage.setItem('todos', JSON.stringify(todos));
}