import React, { useState, Component } from 'react'

export default function Root(props) {
  const [count, setCount] = useState(0)

  return (
    <div>
      root element
      <div>count: {count}</div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Add
      </button>
    </div>
  )
}

// class Sub extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0,
//     }
//     this.setCount = this.setCount.bind(this)
//   }

//   setCount() {
//     this.setState({ count: this.state.count + 1 })
//   }

//   render() {
//     return (
//       <div>
//         root element
//         <div>count: {this.state.count}</div>
//         <button onClick={this.setCount}>Add</button>
//       </div>
//     )
//   }
// }

// export default class Root extends Component {
//   state = {
//     name: 'Root'
//   }

//   render() {
//     return <Sub name="Frankie" />
//   }
// }
