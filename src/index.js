import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// components
import App from './App'
// reducers
import reducers from './reducers/index'

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
    , document.getElementById('root'));
