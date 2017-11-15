import React from 'react'
import {render} from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import {getAllProducts} from './example/shopping-cart/actions'
import thunk from 'redux-thunk'

import reducer from './example/shopping-cart/reducers'
import App from './example/shopping-cart/containers/App'

const middleware = [thunk];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)