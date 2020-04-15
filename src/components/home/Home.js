import React, { useState } from 'react'
import { WiredTextarea } from 'wired-textarea'
import { WiredButton } from 'wired-button'
import { Redirect } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import { Link } from 'react-router-dom'

export default function Home() {
  const [name, setState] = useState(null)
  const taksim = (e) =>
    setState(
      <Redirect
        to={{
          pathname: '/dashboard',
          search: `?name=${document.getElementById('textarea-name').value}`
        }}
      >
        lorem
      </Redirect>
    )

  if (name) return name

  return (
    <section style={{ textAlign: 'center' }}>
      <div style={{ padding: '10px' }}>
        <wired-textarea
          placeholder="Github username"
          rows="6"
          id="textarea-name"
        ></wired-textarea>
      </div>
      <div style={{ padding: '10px', textAlign: 'center' }}>
        {/* <Link to="/dashboard"> */}
        <wired-button elevation="3" onClick={taksim}>
          Get my dashbard
        </wired-button>
        {/* </Link> */}
      </div>
    </section>
  )
}
