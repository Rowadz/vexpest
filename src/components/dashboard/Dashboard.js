import React, { useState, useEffect } from 'react'
import RadioButtons from './components/RadioButtons'
import DragDrop from './components/DragDrop'
import Pie from './components/charts/pie/Pie'
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
    <RadioButtons></RadioButtons>
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <DragDrop child={<Pie />} y={70} x={0} data={data} />
      </Col>
    </Row>
  </section>
)

const getData = async (setSate) => {
  try {
    const res = await (
      await fetch(
        'https://api.github.com/users/MohammedAl-Rowad/repos?per_page=1000'
      )
    ).json()
    setSate(res)
  } catch (error) {
    console.log(error)
    alert('Error while fetching data.. :(')
  }
}
