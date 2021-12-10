import React, { useContext } from 'react'
import AlertContext from '../context/alert/alertContext'

const Alert = () => {
  const { alert } = useContext(AlertContext)

  return (
    alert !== null && (
      <div className="alert-container">
        <div className="alert-info">
          <i className="fas fa-exclamation-circle"></i>
          <h3>{alert}</h3>
        </div>
      </div>
    )
  )
}

export default Alert
