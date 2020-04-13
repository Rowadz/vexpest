import React, { useState, useEffect } from 'react'
import RadioButtons from './components/RadioButtons'
import DragDrop from './components/DragDrop'
import KpiForks from './components/charts/KPI/KpiForks'
import KpiRepos from './components/charts/KPI/KpiRepos'
import KpiStars from './components/charts/KPI/KpiStars'
import KpiForksTotal from './components/charts/KPI/KpiForksTotal'
import Pie from './components/charts/pie/Pie'
import Area from './components/charts/area/Area'
import Worldcould from './components/charts/worldcloud/Wordcould'
import { Row, Col } from 'react-grid-system'
import Spinner from './components/Spinner'

export default function Dashboard() {
  const [state, setSate] = useState(null)
  useEffect(() => {
    getData(setSate.bind(Dashboard))
  }, [])
  let page = null
  if (!state) {
    page = <Spinner />
  } else {
    page = dashboardPage(state)
  }
  return <section>{page}</section>
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
      <Col xs={12} sm={12} md={12} lg={12}>
        <DragDrop child={<Area />} y={1870} x={0} data={data} />
      </Col>
    </Row>
  </section>
)

const getData = async (setSate) => {
  try {
    const res = await (
      await fetch(
        'https://api.github.com/users/taylorotwell/repos?per_page=1000'
      )
    ).json()
    setSate(res)
  } catch (error) {
    console.log(error)
    alert('Error while fetching data.. :(')
  }
}
