import {
  ADD_GOAL,
  EDIT_GOAL,
  DELETE_GOAL,
  COMPLETED_GOAL,
  SHOW_WARNING,
  REMOVE_WARNING,
  SET_TEXT,
} from '../types'

const GoalReducer = (state, action) => {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: action.payload,
      }
    case SHOW_WARNING:
      return {
        ...state,
        warning: true,
      }
    case REMOVE_WARNING:
      return {
        ...state,
        warning: false,
      }
    case ADD_GOAL:
      return {
        ...state,
        goals: [...state.goals, action.payload],
      }
    case DELETE_GOAL:
      return {
        ...state,
        goals: state.goals.filter((goal) => goal.id !== action.payload),
      }
    case EDIT_GOAL:
      return {
        ...state,
        goals: state.goals.filter((goal) => goal.id !== action.payload),
        text: state.goals.find((goal) => goal.id === action.payload).title,
      }
    case COMPLETED_GOAL:
      return {
        ...state,
        goals: state.goals.map((goal) => {
          if (goal.id === action.payload) {
            return {
              ...goal,
              completed: !goal.completed,
            }
          }
          return goal
        }),
      }
    default:
      return {
        state,
      }
  }
}
export default GoalReducer
