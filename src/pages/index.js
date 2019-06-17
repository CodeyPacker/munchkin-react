import React from 'react'
import styled from '@emotion/styled'
// import SearchMonster from '../components/FormContainer'
import Header from '../components/Header'
import {BrowserRouter, Route} from 'react-router-dom'
import Board from '../components/Board'
import ScoreBoard from '../components/FeatureScoresLayout'
import Player from '../components/Player/Player'
import { Provider } from '../components/Context';
// import SearchMonster from '../components/SearchMonster'

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Container>
          <Route path="/" component={Header}/>
          {/* <Route exact path="/" component={SearchMonster} /> */}
          <Route path="/board" component={Board} />
          <Route exact path="/battle" component={ScoreBoard}/>
          <Route
            exact path="/"
            component={Player}
            index={0}/>
        </Container>
      </BrowserRouter>
    </Provider>
  )
}
export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`