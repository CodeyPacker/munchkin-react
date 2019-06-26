import React from 'react'
import styled from '@emotion/styled'
// import SearchMonster from '../components/FormContainer'
import Header from '../components/Header'
import {HashRouter, Route} from 'react-router-dom'
import FeatureScores from '../components/FeatureScoresLayout'
import PlayerBase from '../components/Player/PlayerBase'
import { Provider } from '../components/Context'
import PlayerList from '../components/Player/PlayerList'

function App() {
  return (
    <Provider>
      <HashRouter>
        <Container>
          <Route path="/" component={Header}/>
          <Route exact path="/battle" component={FeatureScores}/>
          <Route
            exact path="/"
            component={PlayerBase}
          />
          <Route path="/battle" component={PlayerList}/>
          {/* <Route
            path="/battle"
            render={(props) => <PlayerCounter modifier="level" {...props}/>}
          /> */}
        </Container>
      </HashRouter>
    </Provider>
  )
}
export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`