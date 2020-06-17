import React, { useState } from 'react'
import './App.scss'
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
import { defaultTheme } from './helpers/magicStrings'
const { Body } = Navbar
const { Item } = Nav

const App = () => {
  const [state, setState] = useState({ theme: defaultTheme })
  return (
    <main>
      <Router style={{ background: 'red' }}>
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
                  <Dashboard theme={state.theme} updateTheme={setState} />
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
