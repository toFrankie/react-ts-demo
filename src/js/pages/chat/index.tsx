import React, { useState, useEffect } from 'react'

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null)

  useEffect(() => {
    function handleStatusChange(state) {
      setIsOnline(status.isOnline)
    }
    // TODO: 订阅状态

    return () => {
      // TODO: 取消订阅状态
    }
  })

  if (isOnline === null) return 'Loading...'

  return isOnline ? 'Online' : 'Offline'
}

export default function Chat() {
  const [state, setstate] = useState(0)
  return (
    <>
      <FriendStatus />
      <FriendStatus />
    </>
  )
}
