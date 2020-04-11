import React from 'react'
import './App.css'
import Home from './components/home/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
