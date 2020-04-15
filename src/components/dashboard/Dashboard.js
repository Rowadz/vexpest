import React, { useState, useEffect } from 'react'
import RadioButtons from './components/RadioButtons'
import DragDrop from './components/DragDrop'
import KpiForks from './components/charts/KPI/KpiForks'
import KpiRepos from './components/charts/KPI/KpiRepos'
import KpiStars from './components/charts/KPI/KpiStars'
import KpiForksTotal from './components/charts/KPI/KpiForksTotal'
import KpiArchived from './components/charts/KPI/KpiArchived'
import KpiNotArchived from './components/charts/KPI/KpiNotArchived'
import Pie from './components/charts/pie/Pie'
import Area from './components/charts/area/Area'
import Worldcould from './components/charts/worldcloud/Wordcould'
import Bar from './components/charts/bar/Bar'
import RepoTable from './components/tables/RepoTable'
import { Row, Col } from 'react-grid-system'
import Spinner from './components/Spinner'
import { WiredDialog } from 'wired-dialog'

export default function Dashboard() {
  const [state, setSate] = useState({ data: null, err: false })
  useEffect(() => {
    getData(setSate.bind(Dashboard))
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
  console.log(state)
  return (
    <section>
      {page}
      {dialog}
    </section>
  )
}

const dashboardPage = (data) => (
  <section>
    {/* <RadioButtons></RadioButtons> */}
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
      <Col xs={12} sm={12} md={6} lg={6}>
        <DragDrop child={<Worldcould />} y={70} x={0} data={data} />
      </Col>
      <Col xs={12} sm={12} md={6} lg={6}>
        <DragDrop
          child={<Pie />}
          y={70}
          x={10}
          data={data}
          yPie={'size'}
          mapper={(d) => d / 1000}
          tooltip={{ pointFormat: 'Size in MB: <b>{point.y}</b>' }}
          title={'Repository by Size in megabyte'}
          legend={false}
        />
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <DragDrop
          child={<Pie />}
          y={670}
          x={0}
          data={data}
          yPie={'stargazers_count'}
        />
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <DragDrop
          child={<Pie />}
          y={1270}
          x={0}
          data={data}
          yPie={'forks_count'}
          tooltip={{ pointFormat: 'forks count ⛓️: <b>{point.y}</b>' }}
          title={'Forks by Repository'}
          // legend={false}
        />
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={12} md={6} lg={6}>
        <DragDrop child={<Area />} y={1870} x={0} data={data} />
      </Col>
      <Col xs={12} sm={12} md={6} lg={6}>
        <DragDrop child={<Bar />} y={1870} x={10} data={data} />
      </Col>
      <Col xs={12} sm={12} md={12} lg={12}>
        <DragDrop
          child={<RepoTable />}
          y={2470}
          disableDragging={true}
          x={0}
          data={data}
          resize={false}
        />
      </Col>
    </Row>
  </section>
)

const getData = async (setSate) => {
  try {
    let res = []
    for (const i of [...Array(1).keys()]) {
      const data = await (
        await fetch(
          `https://api.github.com/users/laravel/repos?per_page=1000&page=${
            i + 1
          }`
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
