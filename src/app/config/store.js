import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';

import reducers from './../reducers'

const middleware = [thunk]

// middleware.push(logger)

let store = createStore(reducers, applyMiddleware(...middleware))

export default store;