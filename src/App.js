import React from 'react'
import './App.css'
import Home from './components/home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import { Container, Row, Col } from 'react-grid-system'

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Row>
              <Col sm={12}>
                <Dashboard />
              </Col>
            </Row>
          </Route>
          <Route path="/">
            <Row>
              <Col sm={12}>
                <Home />
              </Col>
            </Row>
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default App
