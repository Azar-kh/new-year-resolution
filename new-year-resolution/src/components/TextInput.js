import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import GoalContext from '../context/goal/goalContext'
import AlertContext from '../context/alert/alertContext'
import Alert from './Alert'

const TextInput = () => {
  const { addGoal, text, setText } = useContext(GoalContext)
  const { setAlert } = useContext(AlertContext)
  const randomId = uuidv4()

  const changeHandler = (e) => {
    setText(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (text === '') {
      setAlert('Please type something!')
    } else {
      addGoal({
        id: randomId,
        title: text,
        completed: false,
      })

      setText('')
    }
  }

  return (
    <div className="input-container">
      <form onSubmit={submitHandler} className="form">
        <input
          className="input"
          onChange={changeHandler}
          type="text"
          value={text}
          placeholder="Start here..."
          autoComplete="off"
          autoFocus
        ></input>
      </form>
      <Alert />
    </div>
  )
}

export default TextInput
