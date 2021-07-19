import React, { useEffect, Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './index.less'

export default function Home() {
  return (
    <div className={style.container}>
      <h3>This is Home Page.</h3>
      <NavLink to="/mine">To Mine</NavLink>
    </div>
  )
}

// export default class Home extends Component {
//   state = {
//     num: 0
//   }

//   componentDidMount() {
//     this.setState({ num: 1 }, () => {
//       console.log(this.state)
//     })
//   }

//   componentWillUnmount() {
//     // this.setState({ num: 2 })
//     this.state.num = 2
//     Array(1000)
//       .fill('0')
//       .forEach(i => console.log(i))
//     setTimeout(() => {
//       console.log(this.state)
//     }, 3000)
//   }

//   render() {
//     return (
//       <div className={style.container}>
//         <h3>This is Home Page.</h3>
//         <NavLink to="/mine">To Mine</NavLink>
//       </div>
//     )
//   }
// }
