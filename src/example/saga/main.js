import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import Counter from './example/saga/Counter'
import reducer from './example/saga/reducers'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './example/saga/sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

function render() {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => action('INCREMENT')}
            onDecrement={() => action('DECREMENT')}
            onIncrementAsync={() => action('INCREMENT_ASYNC')}/>,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)
