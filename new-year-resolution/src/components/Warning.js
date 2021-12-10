import React, { useContext } from 'react'
import GoalContext from '../context/goal/goalContext'

const Warning = () => {
  const { removeWarning } = useContext(GoalContext)
  return (
    <div className="warning-container">
      <div className="warning-info">
        <i className="fas fa-exclamation-circle"></i>
        <h4>You can only enter 5 tasks!</h4>
        <p>Add more once you've completed one of the tasks.</p>
        <button onClick={removeWarning}>Ok,got It!</button>
      </div>
    </div>
  )
}

export default Warning
