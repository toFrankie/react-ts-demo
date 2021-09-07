import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import Root from './root'

const rootEl = document.getElementById('app-root')
render(
  <StrictMode>
    <Root />
  </StrictMode>,
  rootEl
)
