import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import store from './js/store'
import { Home, Mine, Chat } from './js/pages'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/mine" component={Mine} />
        <Route path="/chat" component={Chat} />
        {/* 路由不匹配时，可以有两种选择：1. 使用 Redirect 重定向至某个页面，2. 404 页面。但都要放在最后 */}
        <Redirect to="/" />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default function Root() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}
