import React, { useState, useEffect } from 'react'
import KpiForks from './components/charts/KPI/KpiForks'
import KpiRepos from './components/charts/KPI/KpiRepos'
import KpiStars from './components/charts/KPI/KpiStars'
import KpiForksTotal from './components/charts/KPI/KpiForksTotal'
import KpiArchived from './components/charts/KPI/KpiArchived'
import KpiNotArchived from './components/charts/KPI/KpiNotArchived'
import RepoTable from './components/tables/RepoTable'
import Area from './components/charts/area/Area'
import { Row, Col } from 'react-grid-system'
import Spinner from './components/Spinner'
import { WiredDialog } from 'wired-dialog'
import { Base64 } from 'js-base64'
import StarsGraph from './components/charts/starsGraph/starsGraph'
import Line from './components/charts/line/line'
import Bar from './components/charts/bar/Bar'

export default function Dashboard() {
  const query = new URLSearchParams(window.location.search)
  const name = query.get('name')
  const [state, setSate] = useState({ data: null, err: false })
  useEffect(() => {
    getData(setSate.bind(Dashboard), name)
  }, [])
  let page = null
  let dialog = null
  if (!state.data) {
    page = <Spinner />
  } else {
    page = dashboardPage(state.data)
  }
  if (state.err) {
    dialog = (
      <wired-dialog open={!state.err} elevation={5}>
        <h1>Oops! :(</h1>
        <p>
          <b>
            looks like we sent too many request, plz come back later after 1
            hour. ( most likely )
          </b>
          {/* aka we sent more than one request in 1 hour */}
        </p>
        <p>
          or something I have no idea about happened and my code does not handle
          it.
        </p>
        <div style={{ textAlign: 'center', padding: '30px 16px 16px' }}>
          {/* <wired-button id="closeDialog">Close dialog</wired-button> */}
        </div>
      </wired-dialog>
    )
  }
  return (
    <section>
      {page}
      {dialog}
    </section>
  )
}

const dashboardPage = (data) => {
  return (
    <section>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <KpiRepos data={data} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <KpiForks data={data} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <KpiStars data={data} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <KpiForksTotal data={data} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <KpiArchived data={data} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <KpiNotArchived data={data} />
        </Col>
      </Row>
      <Row className="pt-4">
        <Col xs={12} sm={12} md={12} lg={12}>
          <Line data={data} />
        </Col>
      </Row>
      <Row className="pt-4">
        <Col xs={12} sm={12} md={12} lg={12}>
          <Area data={data} />
        </Col>
      </Row>
      <Row className="pt-4">
        <Col xs={12} sm={12} md={12} lg={12}>
          <Bar data={data} />
        </Col>
      </Row>
      <Row className="pt-4">
        <Col xs={12} sm={12} md={12} lg={12}>
          <StarsGraph data={data} />
        </Col>
      </Row>
    </section>
  )
}

const getData = async (setSate, name) => {
  let headers = new Headers()
  headers.append('Authorization', 'Basic' + Base64.encode(``))

  try {
    let res = []
    for (const i of [...Array(10).keys()]) {
      const data = await (
        await fetch(
          `https://api.github.com/users/${name}/repos?per_page=1000&page=${
            i + 1
          }`,
          { headers }
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
