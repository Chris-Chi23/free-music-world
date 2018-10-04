import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './user/reducer'

const middlewares = [thunk],
      win = window
if(process.env.NODE_ENV !== 'production'){
    middlewares.push(require('redux-immutable-state-invariant').default())
}
const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    win.devToolsExtension ? win.devToolsExtension(): f=>f
)
export default createStore(userReducer, storeEnhancers)