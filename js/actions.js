
import { todos, setTodos } from "./state.js";
import { saveTodos } from "./storage.js";
import { renderTodos } from "./render.js";

export function addTodo(text, priority) {
    const newTodo={
        id: Date.now(),
        text,
        priority,
        completed: false
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    saveTodos(updatedTodos);

    renderTodos();  
}

export function toggleTodo(id) {
    const updatedTodos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
    renderTodos();
}

export function deleteTodo(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
    renderTodos();
}