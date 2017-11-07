let defaultState ={};

const chatReducer = (state = defaultState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_CHAT':
            return Object.assign({}, state, {
                chatLog: state.chatLog.concat(payload)
            });
        case 'CHANGE_STATUS':
            return Object.assign({}, state, {
                statusMessage: payload
            });
        case 'CHANGE_USERNAME':
            return Object.assign({}, state, {
                userName: payload
            });
        default: return state;
    }
};


defaultState = chatReducer(defaultState, { type: 'CHANGE_STATUS', payload: '11' });
console.log(defaultState);
defaultState = chatReducer(defaultState, { type: 'CHANGE_USERNAME', payload: '11' });
console.log(defaultState);
defaultState = chatReducer(defaultState, { type: 'CHANGE_STATUS', payload: '13' });
console.log(defaultState);


