import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => {
    console.log('components TodoList');
    return <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onclick={() => onTodoClick(todo.id)}
            />
        )}

    </ul>
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList



