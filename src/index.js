import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import store from './store'
import MusicApp from './musicApp'
import TempComp from './TempComp'
import InitSignin from './user/views/initSignin'
import Recommendation from './recommendation/views/recommendation'

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <InitSignin store={store}/>
            <TempComp store={store}/>
        </React.Fragment>
    </Provider>, document.getElementById('root'));
