import React from 'react'
import styled from '@emotion/styled'
import { Consumer } from '../Context';
import Counter from '../Counter'
import PlayerImg from '../../images/player.svg'

const PlayerBase = (props) => {
  return (
    <Consumer>
      { ({ players }) => (
        <PlayerWrapper>
          <PlayerImage src={PlayerImg} alt="Player image"/>
          <h2>Level</h2>
          <CounterWrapper>
            <Counter index={0} modifier="baseScore"/>
          </CounterWrapper>
        </PlayerWrapper>
      )}
    </Consumer>
  );
}

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100% - 150px);
  margin-right: 15px;
  margin-left: 15px;
  text-align: center;
  color: #4C4C4D;
`

const PlayerImage = styled.img`
  margin: 0 auto;
  display: block;
  padding-top: 26px;
  padding-bottom: 26px;
  max-width: 150px;
  max-height: 202px;
  width: 100%;
`
const CounterWrapper = styled.div`
  height: 60px;
`
export default PlayerBase