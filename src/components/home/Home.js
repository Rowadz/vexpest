import React from 'react'
import { WiredTextarea } from 'wired-textarea'
import { WiredButton } from 'wired-button'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section style={{ textAlign: 'center' }}>
      <div style={{ padding: '10px' }}>
        <wired-textarea placeholder="Github username" rows="6"></wired-textarea>
      </div>
      <div style={{ padding: '10px', textAlign: 'center' }}>
        <Link to="/dashboard">
          <wired-button elevation="3">Get my dashbard</wired-button>
        </Link>
      </div>
    </section>
  )
}
