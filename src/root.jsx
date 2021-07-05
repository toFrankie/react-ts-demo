import React, { useState, Component } from 'react'
import Sub1 from './js/components/Sub1'
import Sub2 from './js/components/Sub2'

export default class Root extends Component {
  state = {
    name: 'Root'
  }

  render() {
    return (
      <div>
        <Sub1 name="Frankie" />
        <Sub2 name="Mandy" />
      </div>
    )
  }
}
