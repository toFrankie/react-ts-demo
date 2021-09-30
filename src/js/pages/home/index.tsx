import React, { useState, useEffect, Component } from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'
import style from './index.less'
import connect from '../../store/connect'

// export default function Home() {
//   return (
//     <div className={style.container}>
//       <h3>This is Home Page.</h3>
//       <NavLink to="/mine">To Mine</NavLink>
//     </div>
//   )
// }

@connect
export default class Home extends Component {
  public componentDidMount() {
    // fetch('/user')
    fetch('/login', {
      method: 'POST',
      headers: {
        Accept: '*/*',
        // 'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // body: JSON.stringify({ username: 'Frankie', password: '123' })
      body: 'username=Frankie&password=123'
    })
      .then(response => response.json())
      .then(res => {
        if (!res.data) throw res
        console.log(res.data)
      })
      .catch(err => {
        console.warn(err)
      })
  }

  public render() {
    return (
      <div className={style.container}>
        文本节点
        <h3>This is Home Page.</h3>
        <NavLink to="/mine">To Mine</NavLink>
        <button
          onClick={() => {
            // window.location.hash = 'mine'
            // this.props.history.goForward('mine')
            this.props.history.push('mine')
          }}
        >
          To Mine
        </button>
        <h2>Other Router...</h2>
        <button onClick={this.props.inc}>+</button>
        <button onClick={this.props.dec}>-</button>
      </div>
    )
  }
}
