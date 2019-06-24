import React from 'react'
import styled from '@emotion/styled'
// import SearchMonster from '../components/FormContainer'
import Header from '../components/Header'
import Player from '../components/Player/Player'
import Layout from '../layouts'

function App() {
  return (
      <Container>
        <Layout>
          <Header />
          <Player />
        </Layout>
      </Container>
  )
}
export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`