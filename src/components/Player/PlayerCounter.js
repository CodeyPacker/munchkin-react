import React from 'react';
import styled from '@emotion/styled'
import { Consumer } from '../Context';

const PlayerCounter = (props) => {
  return (
    <Consumer>
      { ({ actions, players }) => (
        <CounterWrapper className={(props.base ? 'base' : '')}>
          <PlayerName>{players[0].name}</PlayerName>
          <ModifierButtons>
            <button className="counter-action decrement" onClick={() => actions.changeScore(players[0], -1, props.modifier)}> - </button>
            {/* Check props to see if the counter is supposed to affect the baseScore or not */}
            {props.modifier === "baseScore" ?
              <span className="counter-score">{ players[0].baseScore }</span> :
              <span className="counter-score total-score">{ players[0].baseScore + players[0].oneShotItems }</span>}
            <button className="counter-action increment" onClick={() => actions.changeScore(players[0], 1, props.modifier)}> + </button>
          </ModifierButtons>
        </CounterWrapper>
      )}
    </Consumer>
  );
}

const CounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  ${'' /* Replace with global spacing */}
  padding-left: 15px;
  padding-right: 15px;

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

  .decrement {

  }
}
`

const PlayerName = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #4C4C4D;
  font-family: 'Montserrat', 'sans-serif';
  margin-bottom: 0;
`

const ModifierButtons = styled.div`

button {
  width: 40px;
  height: 40px;
  background-color: #E3E3E3;
  color: #8B8B8D;
  font-weight: bold;
  font-size: 25px;
  border: 0;
  cursor: pointer;
}

.counter-score {
  padding-right: 15px;
  padding-left: 15px;
  font-size: 20px;
  font-family: 'Montserrat', 'sans-serif';
}
`

export default PlayerCounter;