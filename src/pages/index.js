import React from 'react'
import styled from '@emotion/styled'
// import SearchMonster from '../components/FormContainer'
import Header from '../components/Header'
import {BrowserRouter, Route} from 'react-router-dom'
import Board from '../components/Board'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Route path="/" component={Header}/>
        {/* <Route exact path="/" component={SearchMonster} /> */}
        <Route path="/board" component={Board} />
      </Container>
    </BrowserRouter>
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