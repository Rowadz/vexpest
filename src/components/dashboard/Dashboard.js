import React from 'react'
import { Rnd } from 'react-rnd'
import { WiredRadio } from 'wired-radio'

export default function Dashboard() {
  return (
    <section>
      <wired-radio>Stars</wired-radio>
      <wired-radio>Forks</wired-radio>
      <wired-radio>Follower/Following</wired-radio>
      <wired-radio>Graph</wired-radio>

      <Rnd
        style={{ background: '#D9D9D9', boxShadow: '0px 0px 10px #595959' }}
        default={{
          x: 0,
          y: 70,
          width: 320,
          height: 200
        }}
      >
        lorem
      </Rnd>
      <Rnd
        style={{ background: '#D9D9D9', boxShadow: '0px 0px 10px #595959' }}
        default={{
          x: 340,
          y: 70,
          width: 320,
          height: 200
        }}
      >
        lorem
      </Rnd>
      <Rnd
        style={{ background: '#D9D9D9', boxShadow: '0px 0px 10px #595959' }}
        default={{
          x: 340 + 340 + 10,
          y: 70,
          width: 500,
          height: 200
        }}
      >
        lorem
      </Rnd>
    </section>
  )
}
