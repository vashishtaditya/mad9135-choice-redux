const fetchTodos = (todos) => {
    return {
        type: "FETCH_TODOS",
        payload: todos
    }
}

export default fetchTodos