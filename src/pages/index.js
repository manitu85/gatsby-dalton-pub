import React from "react"
// import { Link } from "gatsby"
import styled from 'styled-components'
import { FaBeer } from 'react-icons/fa'

import Layout from "components/layout"
import SEO from "components/seo"

// import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, 'application']} />
    {/* <Container> */}
    <StyledContainer>
      <Row>
        <Col md={4}>
          <h1><FaBeer />{' '} Hello from gatsby</h1>

        </Col>
        <Col md={4}>
          <h1><FaBeer />{' '} Hello from gatsby</h1>
        </Col>
        <Col md={4}>
          <h1><FaBeer />{' '} Hello from gatsby</h1>

        </Col>
      </Row>
    </StyledContainer>
    {/* </Container> */}
  </Layout>
)

const StyledContainer = styled.div`
  width: 1200px;
  height: 100vh;
  margin: auto;
  max-width: 100%;

  background-color: black;


  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

`

export default IndexPage
