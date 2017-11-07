
const userNameReducer = (state = defaultState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case 'CHANGE_USERNAME':
            return payload;
        default: return state;
    }
};

const statusMessageReducer = (state = defaultState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case 'CHANGE_STATUS':
            return payload;
        default: return state;
    }
};

const combineReducers = reducers => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce(
            (nextState, key) => {
                nextState[key] = reducers[key](state[key], action);
                return nextState;
            },
            {}
        );
    };
};

const reducerNew = combineReducers({
    a: userNameReducer,
    b:statusMessageReducer
})

let defaultState ={};
defaultState = reducerNew(defaultState, { type: 'CHANGE_STATUS', payload: '11' });
console.log(defaultState);
defaultState = reducerNew(defaultState, { type: 'CHANGE_USERNAME', payload: '11' });
console.log(defaultState);
defaultState = reducerNew(defaultState, { type: 'CHANGE_STATUS', payload: '13' });
console.log(defaultState);

