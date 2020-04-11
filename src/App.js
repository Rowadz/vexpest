import React from 'react'
import './App.css'
import { WiredTextarea } from 'wired-textarea'
import { WiredButton } from 'wired-button'

function App() {
  return (
    <section className="center">
      <div style={{ padding: '10px' }}>
        <wired-textarea placeholder="Github username" rows="6"></wired-textarea>
      </div>
      <div style={{ padding: '10px', textAlign: 'center' }}>
        <wired-button elevation="3">Get my dashbard</wired-button>
      </div>
    </section>
  )
}

export default App
