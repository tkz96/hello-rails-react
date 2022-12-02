import React from 'react'
import ReactDOM from 'react-dom'
import Greeting from './Greeting'
import { store } from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <Greeting />
    </Provider>,
    document.getElementById('root')
)