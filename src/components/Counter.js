import React from 'react';
import styled from '@emotion/styled'
import { Consumer } from '../components/Context';

const Counter = (props) => {
  return (
    <Consumer>
      { ({ actions, players }) => (
        <ModifierButtons>
          <button className="counter-action decrement" onClick={() => actions.changeScore(props.index, -1, props.modifier)}> - </button>
          {/* Check props to see if the counter is supposed to affect the level or not */}
          { props.modifier === "level" ? <span className="counter-score">{ players[props.index].level }</span> : null }
          { props.modifier === "equipment" ? <span className="counter-score total-score">{ players[0].equipment}</span> : null }
          { props.modifier === "oneShotItems" ? <span className="counter-score total-score">{ players[props.index].level + players[props.index].oneShotItems + players[props.index].equipment }</span> : null }
          <button className="counter-action increment" onClick={() => actions.changeScore(props.index, 1, props.modifier)}> + </button>
        </ModifierButtons>
      )}
    </Consumer>
  );
}

const ModifierButtons = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: no-wrap;

  button {
    width: 40px;
    height: 100%;
    background-color: #E3E3E3;
    color: #8B8B8D;
    font-weight: bold;
    font-size: 25px;
    border: 0;
    cursor: pointer;
    transition: background-color .1s;

    :focus {
      outline: none;
    }

    &.decrement {
      :hover {
        background-color: red;
        color: white;
      }
    }

    &.increment {
      :hover {
        background-color: green;
        color: white;
      }
    }
  }

.counter-score {
  display: inline-block;
  text-align: center;
  padding-right: 15px;
  padding-left: 15px;
  font-size: 25px;
  font-family: 'Montserrat', 'sans-serif';
  min-width: 65px;
}
`

export default Counter;