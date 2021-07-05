import React, { useState, Component } from 'react'

export default class Sub extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    this.setCount = this.setCount.bind(this)
  }

  setCount() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <div>component: { this.props.name }</div>
        <div>count: {this.state.count}</div>
        <button onClick={this.setCount}>Add</button>
      </div>
    )
  }
}
