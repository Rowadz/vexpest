import React from 'react'
import { Rnd } from 'react-rnd'

export default function Dashboard() {
  return (
    <section>
      <Rnd
        style={{ background: '#D9D9D9', boxShadow: '0px 0px 10px #595959' }}
        default={{
          x: 0,
          y: 0,
          width: 320,
          height: 200
        }}
      >
        lorem 1
      </Rnd>
    </section>
  )
}
