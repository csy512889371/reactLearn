import {ADD_TODO, DELETE_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED, EDIT_TODO} from '../constants/ActionTypes'

const initialState = [
    {
        text: 'Use Redux',
        completed: false,
        id: 0
    }
]

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                }
            ]

        case  DELETE_TODO:
            let newState = state.filter(todo =>
                todo.id !== action.id
            );

            return newState

        case COMPLETE_ALL:
            const areAllMarked = state.every(todo => todo.completed)
            return state.map(todo => ({
                ...todo,
                completed: !areAllMarked
            }))

        case COMPLETE_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                    {...todo, completed: !todo.completed} :
                    todo
            )

        case CLEAR_COMPLETED:
            return state.filter(todo => todo.completed === false)

        case EDIT_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                    {...todo, text: action.text} :
                    todo
            )

        default:
            return state
    }
}


