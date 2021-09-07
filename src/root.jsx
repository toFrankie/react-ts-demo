import React, { StrictMode } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Home, Mine, Chat } from './js/pages'

export default function Root() {
  return (
    <StrictMode>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mine" component={Mine} />
          <Route path="/chat" component={Chat} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </StrictMode>
  )
}

// import React from 'react'
// import { hashHistory, Router, Route } from 'react-router'
// import { Home, Mine } from './js/pages'

// export default function Root() {
//   return (
//     <Router history={hashHistory}>
//       <Route path="/" component={Home} />
//       <Route path="/mine" component={Mine} />
//     </Router>
//   )
// }
