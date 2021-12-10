import React from 'react'
import './App.css'
import GoalList from './components/GoalList'
import Progress from './components/Progress'
import NewYear from './components/NewYear'
import GoalState from './context/goal/GoalState'
import AlertState from './context/alert/AlertState'

function App() {
  return (
    <GoalState>
      <AlertState>
        <div className="main-container">
          <NewYear />
          <GoalList />
          <Progress />
        </div>
      </AlertState>
    </GoalState>
  )
}

export default App
