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
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Container, Row, Col } from 'react-grid-system'
import 'rsuite/dist/styles/rsuite-dark.css'
import { Navbar, Nav, Icon } from 'rsuite'
import {
  darkTheme,
  lightBgColor,
  darkBgColor,
  contrastBgColor,
  lightTheme,
  mainColor3,
  contrastTheme,
} from './helpers/magicStrings'
const { Body, Header } = Navbar
const { Item } = Nav

const GlobalStyle = createGlobalStyle`
  body, .rs-panel-heading, .rs-panel, .rs-navbar.rs-navbar-default, .rs-navbar.rs-navbar-default .rs-navbar-header a {
    background-color: ${({ theme: { mode } }) =>
      mode === darkTheme
        ? '#0f131a'
        : mode === lightTheme
        ? '#fff'
        : contrastBgColor};
    color: ${({ theme: { mode } }) =>
      mode === darkTheme
        ? '#e9ebf0'
        : mode === lightTheme
        ? '#575757'
        : mainColor3};
    /*transition: background-color 0.3s ease-in-out;*/
  }
`

const App = () => {
  const [state, setState] = useState({ theme: darkTheme })
  return (
    <ThemeProvider theme={{ mode: state.theme }}>
      <GlobalStyle />
      <main>
        <Router>
          <Navbar
            style={{
              backgroundColor:
                state.theme === darkTheme
                  ? darkBgColor
                  : state.theme === lightTheme
                  ? lightBgColor
                  : contrastBgColor,
              boxShadow: '-1px 6px 10px black',
            }}
          >
            <Header style={{ padding: '18px 20px', display: 'inline-block' }}>
              <NavLink to="/">
                <span
                  role="img"
                  aria-label="random emoji I found"
                  style={{ padding: '5px' }}
                >
                  <Icon icon="rocket" />
                </span>
                VEXPEST
                <span
                  role="img"
                  aria-label="random emoji I found"
                  style={{ padding: '5px' }}
                >
                  <Icon icon="rocket" />
                </span>
              </NavLink>
            </Header>
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
                    <Home theme={state.theme} />
                  </Col>
                </Row>
              </Route>
            </Switch>
          </Container>
        </Router>
      </main>
    </ThemeProvider>
  )
}

export default App
