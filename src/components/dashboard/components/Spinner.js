import React from 'react'
import { Row, Col } from 'react-grid-system'
import { WiredSpinner } from 'wired-spinner'

export default function Spinner() {
  return (
    <Row>
      <Col sm={12}>
        <section style={{ textAlign: 'center' }}>
          <div style={{ padding: '10px' }}>
            <wired-spinner spinning duration="1000"></wired-spinner>
          </div>
        </section>
      </Col>
    </Row>
  )
}
