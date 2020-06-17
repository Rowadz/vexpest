import React, { useState } from 'react'
import { Input, Button, Icon } from 'rsuite'
import { useHistory } from 'react-router-dom'
import { mainColor, darkTheme } from '../../helpers/magicStrings'
import spaceman from './spaceman.svg'
import chart2 from './chart2.svg'
import creator from './creator.svg'
import sourceCode from './sourceCode.svg'
import { Container, Row, Col } from 'react-grid-system'

const checkIfMobile = () =>
  /Mobi/.test(navigator.userAgent) || /Mobi|Android/i.test(navigator.userAgent)
export default function Home({ theme }) {
  console.log(theme)
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
    <Container>
      <Row className="pt-1">
        <Col xs={12} sm={12} md={6} lg={6}>
          <img src={spaceman} width={'100%'} height={'200px'} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
            className={checkIfMobile() ? 'pt-3' : ''}
          >
            <p>
              Welcome to <Icon icon="rocket" />
              <strong style={{ color: mainColor, padding: '5px' }}>
                VEXPEST
              </strong>
              <Icon icon="rocket" />, the app that will generate a dashboard
              based on your Github public data, so you can say <i>hmm</i> for 5
              seconds then leave it.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <p>
              Just type your <b>Github username</b> and click the generate at
              the bottom of the page, wait for a while and then you will see
              your dashboard.
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className={checkIfMobile() ? 'pt-3' : ''}
        >
          <img src={chart2} width={'100%'} height={'200px'} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <img src={creator} width={'100%'} height={'200px'} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
            className={checkIfMobile() ? 'pt-3' : ''}
          >
            <p>
              I created this just as a POC and to make myself more comfortable
              with Reactjs. <b>Follow me</b>
              <a
                href="https://www.linkedin.com/in/mohammed-al-rowad/"
                target="_blank"
              >
                <Icon
                  icon="linkedin"
                  size="2x"
                  style={{ color: mainColor, padding: '5px' }}
                />
              </a>
              <a href="https://github.com/MohammedAl-Rowad" target="_blank">
                <Icon
                  icon="github-alt"
                  size="2x"
                  style={{ color: mainColor, padding: '5px' }}
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UC1Uw_GN4sodGisimwZNzMoA?view_as=subscriber"
                target="_blank"
              >
                <Icon
                  icon="youtube-play"
                  size="2x"
                  style={{ color: mainColor, padding: '5px' }}
                />
              </a>
            </p>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <p>
              If you want to see the source code for this, you can go
              <a
                href="https://github.com/MohammedAl-Rowad/vexpest/tree/version_2"
                target="_blank"
              >
                {' '}
                here{' '}
              </a>
              for the current version, for the old one
              <a
                href="https://github.com/MohammedAl-Rowad/vexpest"
                target="_blank"
              >
                {' '}
                here{' '}
              </a>
              . For the `README` and how to install
              <a
                href="https://github.com/MohammedAl-Rowad/vexpest_V2"
                target="_blank"
              >
                {' '}
                here{' '}
              </a>
              .
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className={checkIfMobile() ? 'pt-3' : ''}
        >
          <img src={sourceCode} width={'100%'} height={'200px'} />
        </Col>
      </Row>
      <div style={{ marginTop: '10px' }} className="pt-4">
        <Input
          componentClass="textarea"
          rows={3}
          style={{
            resize: 'auto',
            backgroundColor: theme === darkTheme ? '#1a1d24' : '#fff',
            color: theme === darkTheme ? '#fff' : '#000',
          }}
          id="textarea-name"
          placeholder="Github username"
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Button appearance="ghost" onClick={taksim}>
          Generate
        </Button>
      </div>
    </Container>
  )
}
