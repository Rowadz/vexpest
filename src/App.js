import React from 'react'
import './App.css'
import Home from './components/home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import { Container, Row, Col } from 'react-grid-system'
import 'rsuite/dist/styles/rsuite-dark.css'
import { Navbar, Nav } from 'rsuite'
const { Body } = Navbar
const { Item } = Nav

function App() {
  return (
    <main>
      <Router>
        <Navbar>
          <Body>
            <Nav>
              <NavLink to="/about">
                <Item>
                  <span role="img" aria-label="random emoji I found">
                    🚀
                  </span>
                  VEXPEST
                  <span role="img" aria-label="random emoji I found">
                    🚀
                  </span>
                </Item>
              </NavLink>
            </Nav>
          </Body>
        </Navbar>
        <Container>
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
        </Container>
      </Router>
    </main>
  )
}

export default App
