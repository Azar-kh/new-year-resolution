import React, { useContext } from 'react'
import GoalContext from '../context/goal/goalContext'

const Progress = () => {
  const { doneGoals } = useContext(GoalContext)
  const progressText = doneGoals.length * 20
  return (
    <div className="progress-container">
      <svg>
        <circle className="outer" />
        <circle className={`inner inner-${progressText}`} />
      </svg>
      <div className="number">
        {progressText}
        <span>%</span>
      </div>
    </div>
  )
}

export default Progress
