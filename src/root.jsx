import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Home, Mine, Chat } from './js/pages'

export default function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/mine" component={Mine} />
        <Route path="/chat" component={Chat} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}
