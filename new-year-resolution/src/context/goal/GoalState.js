import React, { useReducer } from 'react'
import GoalReducer from './goalReducer'
import GoalContext from './goalContext'
import {
  ADD_GOAL,
  EDIT_GOAL,
  DELETE_GOAL,
  COMPLETED_GOAL,
  SHOW_WARNING,
  SET_TEXT,
  REMOVE_WARNING,
} from '../types'

const GoalState = (props) => {
  const initialState = {
    goals: [],
    warning: false,
    text: '',
  }

  const [state, dispatch] = useReducer(GoalReducer, initialState)

  const setText = (input) => {
    dispatch({ type: SET_TEXT, payload: input })
  }

  const addGoal = (goal) => {
    if (state.goals.length > 4) {
      dispatch({ type: SHOW_WARNING })
    } else {
      dispatch({ type: ADD_GOAL, payload: goal })
    }
  }

  const deleteGoal = (id) => {
    dispatch({ type: DELETE_GOAL, payload: id })
  }

  const editGoal = (id) => {
    dispatch({ type: EDIT_GOAL, payload: id })
  }

  const completedGoal = (id) => {
    dispatch({ type: COMPLETED_GOAL, payload: id })
  }

  const removeWarning = () => {
    dispatch({ type: REMOVE_WARNING })
  }

  let doneGoals = state.goals.filter((goal) => goal.completed === true)
  return (
    <GoalContext.Provider
      value={{
        goals: state.goals,
        text: state.text,
        doneGoals,
        warning: state.warning,
        setText,
        addGoal,
        editGoal,
        deleteGoal,
        completedGoal,
        removeWarning,
      }}
    >
      {props.children}
    </GoalContext.Provider>
  )
}

export default GoalState
