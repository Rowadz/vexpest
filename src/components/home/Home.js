import React, { useState } from 'react'
import { Input, Button } from 'rsuite'
import { useHistory } from 'react-router-dom'

export default function Home() {
  const [name] = useState(null)
  const history = useHistory()
  const taksim = (e) => {
    history.push({
      pathname: '/dashboard',
      search: `?name=${document.getElementById('textarea-name').value}`,
    })
  }

  if (name) return name

  return (
    <section>
      <div style={{ padding: '10px' }}>
        <Input
          componentClass="textarea"
          rows={3}
          style={{ resize: 'auto' }}
          id="textarea-name"
          placeholder="Github username"
        />
      </div>
      <div style={{ padding: '10px' }}>
        <Button appearance="ghost" onClick={taksim}>
          Generate
        </Button>
      </div>
    </section>
  )
}
