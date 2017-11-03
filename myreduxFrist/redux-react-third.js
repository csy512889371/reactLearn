'user strict';

const React = require("react");
const ReactDOM = require("react-dom");
const Redux = require("redux");
const {connect, Provider} = require("react-redux");

function reducer(state, action) {
    if (typeof state === 'undefined') return {name: "", num: 0};
    switch (action.type) {
        case "changeName":
            return Object.assign({}, state, action.payload);
        case "access":
            return Object.assign({}, state, {num: 1 + state.num});
        default:
            return state;
    }
}

const store = Redux.createStore(reducer);

let actions = {
    changeName(name) {
        return {
            type: "changeName",
            payload: {name}
        }
    },
    access() {
        return {
            type: "access"
        }
    }
};


let UI = React.createClass({
    render() {
        return <div>
            <p>{this.props.name}</p>
            <p>{this.props.num}</p>
            <input onChange={event => this.props.changeName(event.target.value)}/>
            <button onClick={event => this.props.access()}>access</button>
        </div>
    }
});


function getState(state) {
    return state;
}


UI = connect(getState, actions)(UI);

ReactDOM.render(<Provider store={store}><UI/></Provider>, document.body);