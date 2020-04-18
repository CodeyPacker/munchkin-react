import React from 'react'
import styled from '@emotion/styled'
import Header from '../components/Header'
import {HashRouter, Route} from 'react-router-dom'
import FeatureScores from '../components/FeatureScoresLayout'
import PlayerBase from '../components/Player/PlayerBase'
import { Provider } from '../components/Context'
import PlayerList from '../components/Player/PlayerList'
import MonsterList from '../components/Monster/MonsterList'
import AddPlayer from '../components/Player/AddPlayer'
import MonsterSearch from '../components/Monster/MonsterSearch'
// import MonsterSuggestions from '../components/Monster/MonsterSuggestions';

function App() {
  return (
    <Provider>
      <HashRouter>
        <Container>
          <Route path="/" component={Header} />
          <Route path="/battle" exact component={FeatureScores} />
          <Route path="/" exact component={PlayerBase} />
          <Route path="/battle" component={PlayerList} />
          <Route path="/battle" component={MonsterSearch} />
          <Route path="/battle" component={MonsterList} />
          <Route path="/battle" component={AddPlayer} />
        </Container>
      </HashRouter>
    </Provider>
  )
}
export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
`