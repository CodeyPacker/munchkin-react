import React from 'react'
import styled from '@emotion/styled'
import { Consumer } from '../Context';
import PlayerCounter from '../Player/PlayerCounter'
import PlayerImg from '../../images/player.svg'

const PlayerBase = (props) => {
  return (
    <Consumer>
      { ({ players }) => (
        <PlayerWrapper>
          <PlayerImage src={PlayerImg} alt="Player image"/>

          <h2 className="total-base-score">{`Total: ${players[0].level + players[0].equipment}`}</h2>

          <div className="counter-container">
            <h2 className="score-title">Level</h2>
            <CounterWrapper>
              <PlayerCounter index={0} modifier="level"/>
            </CounterWrapper>
          </div>

          <div className="counter-container">
            <h2 className="score-title">Equipment</h2>
            <CounterWrapper>
              <PlayerCounter modifier="equipment"/>
            </CounterWrapper>
          </div>
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
  text-align: center;
  color: #4C4C4D;

  .counter-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
    padding-left: 15px;
    border-bottom: 1px solid #EEEEEE;

    :first-of-type {
      border-top: 1px solid #EEEEEE;
    }
  }

  .score-title {
    margin-bottom: 0;
  }

  .total-base-score {
    border-bottom: 5px solid #8063FA;
    padding-bottom: 10px;
    margin-bottom: 0;
  }
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