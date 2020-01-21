import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { reducer } from './store/reducers'
import { createStore } from 'redux'
import Root from './components/Root';

export const store = createStore(reducer)

ReactDOM.render(<Root store={store} />, document.getElementById('root'));