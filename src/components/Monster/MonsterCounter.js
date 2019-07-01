import React from 'react';
import styled from '@emotion/styled'
import { Consumer } from '../Context';

const MonsterCounter = (props) => {
  return (
    <Consumer>
      { ({ actions, monsters }) => (
        <ModifierButtons>
          <button className="counter-action decrement" onClick={() => actions.changeMonsterScore(props.index, -1, props.modifier)}> - </button>
          { props.modifier === "oneShotItems" ? <span className="counter-score total-score">{ monsters[props.index].power + monsters[props.index].oneShotItems}</span> : null }
          <button className="counter-action increment" onClick={() => actions.changeMonsterScore(props.index, 1, props.modifier)}> + </button>
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
        background-color: #F9A7A7;
        color: white;
      }
    }

    &.increment {
      :hover {
        background-color: #7DD49B;
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

export default MonsterCounter;