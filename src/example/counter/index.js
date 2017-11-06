'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import Counter from './counter/components/Counter'
import counter from './counter/reducers'

const store = createStore(counter);
const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
    />, rootEl
);

render();
store.subscribe(render);