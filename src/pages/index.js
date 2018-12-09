import React from 'react'
import styled from '@emotion/styled'
import Form from '../components/FormContainer'
// import Nav from '../components/Nav'

function App() {
  return (
    <Container>
      <Form />
      {/* <Nav /> */}
    </Container>
  )
}
export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

// TODO: Take the value of the suggestion button that's clicked, 
// and display the matching monster card