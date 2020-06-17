import React, { useState, useEffect } from 'react'
import KpiForks from './components/charts/KPI/KpiForks'
import KpiRepos from './components/charts/KPI/KpiRepos'
import KpiStars from './components/charts/KPI/KpiStars'
import KpiForksTotal from './components/charts/KPI/KpiForksTotal'
import KpiArchived from './components/charts/KPI/KpiArchived'
import KpiNotArchived from './components/charts/KPI/KpiNotArchived'
import Area from './components/charts/area/Area'
import { Row, Col } from 'react-grid-system'
import Spinner from './components/Spinner'
// import { Base64 } from 'js-base64'
import StarsGraph from './components/charts/starsGraph/starsGraph'
import Line from './components/charts/line/line'
import Bar from './components/charts/bar/Bar'
import Pie from './components/charts/pie/Pie'
import { Modal, Icon, IconButton, Dropdown } from 'rsuite'
import {
  lightTheme,
  darkTheme,
  lightTxtColor,
  darkTxtColor,
  lightBgColor,
  darkBgColor,
  contrastBgColor,
  contrastTheme,
} from '../../helpers/magicStrings'
const { Header, Title, Body, Footer } = Modal
const { Item } = Dropdown

const Dashboard = ({ theme, updateTheme }) => {
  const query = new URLSearchParams(window.location.search)
  const name = query.get('name')
  const [state, setSate] = useState({
    data: null,
    err: false,
    name: null,
    theme,
  })
  useEffect(() => {
    getData(setSate.bind(Dashboard), name)
  }, [])
  let page = null
  let dialog = null
  if (!state.data) {
    page = <Spinner />
  } else {
    page = dashboardPage(state.data, theme)
  }
  if (state.err) {
    dialog = (
      <Modal backdrop={true} show={state.err}>
        <Header>
          <Title>Oops! :(</Title>
        </Header>
        <Body>
          <p>
            <b>
              looks like we sent too many request, plz come back later after 1
              hour. ( most likely )
            </b>
            {/* aka we sent more than one request in 1 hour */}
          </p>
          <p>
            or something I have no idea about happened and my code does not
            handle it.
          </p>
        </Body>
        <Footer>
          <strong>
            <p>Try refreshing the page</p>
          </strong>
        </Footer>
      </Modal>
    )
  }

  const changeTheme = (theme) => {
    updateTheme({ theme })
  }

  return (
    <section style={{ paddingTop: '1rem' }}>
      <Dropdown
        renderTitle={() => {
          return (
            <IconButton
              icon={
                <Icon
                  icon={
                    theme === darkTheme
                      ? 'moon-o'
                      : theme === lightTheme
                      ? 'sun-o'
                      : 'first-order'
                  }
                />
              }
              circle
              style={{
                backgroundColor:
                  theme === darkTheme
                    ? darkBgColor
                    : theme === lightTheme
                    ? lightBgColor
                    : contrastBgColor,
                color: theme === darkTheme ? darkTxtColor : lightTxtColor,
                boxShadow: '-1px 6px 10px black',
              }}
              // appearance="ghost"
            />
          )
        }}
      >
        <Item onClick={() => changeTheme(darkTheme)}>
          <Icon icon="moon-o" /> Night
        </Item>
        <Item onClick={() => changeTheme(lightTheme)}>
          <Icon icon="sun-o" /> Snow
        </Item>
        <Item onClick={() => changeTheme(contrastTheme)}>
          <Icon icon="first-order" /> Red-White
        </Item>
      </Dropdown>

      {page}
      {dialog}
    </section>
  )
}

const dashboardPage = (data, theme) => {
  const kpis = [
    KpiRepos,
    KpiForks,
    KpiStars,
    KpiForksTotal,
    KpiArchived,
    KpiNotArchived,
  ].map((el, i) => (
    <Col xs={12} sm={12} md={6} lg={6} key={i}>
      {React.createElement(el, { data, theme })}
    </Col>
  ))

  const charts = [Line, Pie, Area, Bar, StarsGraph].map((el, i) => (
    <Row className="pt-4" key={i}>
      <Col xs={12} sm={12} md={12} lg={12}>
        {React.createElement(el, { data, theme })}
      </Col>
    </Row>
  ))

  return (
    <section>
      <Row>{kpis}</Row>
      {charts}
    </section>
  )
}

const getData = async (setSate, name) => {
  // let headers = new Headers()
  // headers.append(
  //   'Authorization',
  //   'Basic' + Base64.encode(`username:password`)
  // )

  try {
    let res = []
    for (const i of [...Array(10).keys()]) {
      const data = await (
        await fetch(
          `https://api.github.com/users/${name}/repos?per_page=1000&page=${
            i + 1
          }`
          // { headers }
        )
      ).json()
      if (data.length === 0) break
      res.push(...data)
    }
    setSate({ data: res, err: false })
  } catch (error) {
    console.error(error)
    setSate({ err: true })
  }
}

export default Dashboard
