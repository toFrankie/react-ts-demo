import { Component, useEffect } from 'react'
import { useHistory, useLocation, withRouter } from 'react-router'

export default function Mine(props) {
  console.log(props.history.go === window.history.go)
  const go = () => {
    props.history.goForward('/')
  }
  return (
    <>
      <div>This is Mine Page.</div>
      <button
        onClick={() => {
          props.history.push('')
        }}
      >
        To Home
      </button>
      <button
        onClick={() => {
          props.history.go(1)
        }}
      >
        Will Reload？
      </button>
      <Child />
      <Child2 />
    </>
  )
}

function Child(props) {
  const history = useHistory()
  const location = useLocation()
  useEffect(() => {
    console.log(props)
    console.log(history)
    console.log(location)
  })

  return <div>Child</div>
}

@withRouter
class Child2 extends Component {
  componentDidMount() {
    console.log('')
    console.log(this.props)
  }
  render = () => <div>Child2</div>
}
