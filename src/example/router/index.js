import React from 'react'
import { render } from 'react-dom'
import routes from './routerlessons/02-rendering-a-route/modules/routes'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'


render(
    <Router routes={routes} history={browserHistory}/>,
    document.getElementById('root')
)
