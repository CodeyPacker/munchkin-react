import React from 'react';
import styled from '@emotion/styled'
import { Consumer } from '../Context';

const PlayerCounter = (props) => {
  return (
    <Consumer>
      { ({ actions, players }) => (
        <CounterWrapper className={(props.base ? 'base' : '')}>
          <button className="counter-action decrement" onClick={() => actions.changeScore(players[0], -1, props.modifier)}> - </button>
          {/* Check props to see if the counter is supposed to affect the baseScore or not */}
          {props.modifier === "baseScore" ?
            <span className="counter-score">{ players[0].baseScore }</span> :
            <span className="counter-score">{ players[0].baseScore + players[0].oneShotItems }</span>}
          <button className="counter-action increment" onClick={() => actions.changeScore(players[0], 1, props.modifier)}> + </button>
        </CounterWrapper>
      )}
    </Consumer>
  );
}

const CounterWrapper = styled.div`
  margin-bottom: 20px;

&.base {
  display: flex;
  justify-content: center;

  span {
    font-size: 25px;
    align-self: center;
    padding-right: 20px;
    padding-left: 20px;
    font-family: 'Montserrat', 'sans-serif';
    color: #4C4C4D;
  }

  button {
    width: 40px;
    height: 40px;
    background-color: #5B45B9;
    color: white;
    font-size: 25px;
    border: 0;
    cursor: pointer;
  }
}
`

export default PlayerCounter;