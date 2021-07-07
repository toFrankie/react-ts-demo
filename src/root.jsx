import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Home, Mine } from './js/pages'

export default function Root() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/mine" component={Mine} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
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
