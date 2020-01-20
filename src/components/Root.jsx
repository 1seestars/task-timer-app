import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainComponent from './MainComponent'
import ScoreItem from './ScoreItem'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={MainComponent} />
      <Route path='/:id' component={ScoreItem} />
    </Router>
  </Provider>
)

export default Root