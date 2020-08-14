import React from 'react'
import { Panel, Col, TagGroup, Tag } from 'rsuite'

export default function Contribution({ contribution }) {
  const cont = contribution.length
    ? contribution.map(({ login, html_url, avatar_url }) => {
        return (
          <Col md={6} sm={12} className="shrink">
            <Panel shaded bordered header={login}>
              <TagGroup>
                <Tag>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`https://github.com/${login}?tab=repositories`}
                  >
                    Repos
                  </a>
                </Tag>
                <Tag>
                  <a
                    target="_blank"
                    href={avatar_url}
                    rel="noopener noreferrer"
                  >
                    Real Avatar
                  </a>
                </Tag>
              </TagGroup>
              <a href={html_url} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://avatars.dicebear.com/api/bottts/${login}.svg`}
                  alt={`${login} generated avatar`}
                />
              </a>
            </Panel>
          </Col>
        )
      })
    : null
  return cont ? (
    <section>
      <div
        style={{ textAlign: 'center', marginBottom: '20px', fontSize: '19px' }}
      >
        <h6>List of Contributors!</h6>
        <small>Only the public ones</small>
      </div>
      {cont}
    </section>
  ) : (
    ''
  )
}
