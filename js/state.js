export let todos = [];
export let currentFilter = 'all';

export function setTodos(newTodos) {
    todos = newTodos;
}

export function setFilter(filter) {
    currentFilter = filter;
}