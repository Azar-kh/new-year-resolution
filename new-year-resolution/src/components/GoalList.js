import React, { Fragment, useContext } from 'react'
import Goal from './Goal'
import TextInput from './TextInput'
import GoalContext from '../context/goal/goalContext'
import Warning from './Warning'

const GoalList = () => {
  const { warning } = useContext(GoalContext)
  return (
    <Fragment>
      {warning && <Warning />}
      <div className="container">
        <h2>My top 5 new year's resolution:</h2>
        <hr />
        <TextInput />
        <Goal />
      </div>
    </Fragment>
  )
}

export default GoalList
