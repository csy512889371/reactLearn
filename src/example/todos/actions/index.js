let nextTodoId = 0;

export const addTodo = (text) => {
    console.log("actions addTodo");
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
};

export const setVisibilityFilter = (filter) => {
    console.log("actions setVisibilityFilter");
    return {
        type:'SET_VISIBILITY_FILTER',
        filter
    }
};

export const toggleTodo = (id) => {
    console.log('actions toggleTodo....');
    return {
        type : 'TOGGLE_TODO',
        id
    }
};