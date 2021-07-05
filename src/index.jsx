import React from 'react'
import { render } from 'react-dom'
import Root from './root'

// https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#usage-with-indirection-like-workers-and-js-templates
// window.$RefreshReg$ = () => { }
// window.$RefreshSig$ = () => () => { }

const rootEl = document.getElementById('root')
render(<Root />, rootEl)

if (module.hot) {
  module.hot.accept('./root', () => {
    import('./root.jsx').then(module => {
      const NextRoot = module.default
      render(<NextRoot/>, rootEl)
    })
  })
}
