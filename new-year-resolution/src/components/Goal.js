import React, { useContext } from 'react'
import GoalContext from '../context/goal/goalContext'

const Goal = () => {
  const { goals, completedGoal, deleteGoal, editGoal } = useContext(GoalContext)
  return (
    <div className="goal-container">
      {goals.map((goal, index) => (
        <div
          key={index}
          className={`goal  ${goal.completed && 'goal-done'}`}
          id={goal.id}
        >
          <p>{goal.title}</p>
          <div className="btn-container">
            <button
              className="btn btn-done"
              onClick={() => completedGoal(goal.id)}
            >
              <i className="fas fa-check-square"></i>
            </button>
            <button className="btn btn-edit" onClick={() => editGoal(goal.id)}>
              <i className="far fa-edit"></i>
            </button>
            <button
              className="btn btn-delete"
              onClick={() => deleteGoal(goal.id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Goal
