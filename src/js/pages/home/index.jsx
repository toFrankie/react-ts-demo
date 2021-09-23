import React, { useState, useEffect, Component } from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'
import style from './index.less'

export default function Home() {
  useEffect(() => {
    // fetch('/user', { credentials: 'include' })
    fetch('/login', {
      method: 'POST',
      headers: {
        Accept: '*/*',
        // 'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      credentials: 'include',
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
  }, [])

  return (
    <div className={style.container}>
      <h3>This is Home Page.</h3>
      <NavLink to="/mine">To Mine</NavLink>
    </div>
  )
}
