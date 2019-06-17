import React from 'react';
import { Consumer } from '../Context';

const Counter = () => {
  return (
    <Consumer>
      { ({ actions, players }) => (
        <div className="counter">
          <button className="counter-action decrement" onClick={() => actions.changeScore(players[0], -1)}> - </button>
          <span className="counter-score">{ players[0].score }</span>
          <button className="counter-action increment" onClick={() => actions.changeScore(players[0], 1)}> + </button>
        </div>
      )}
    </Consumer>
  );
}

export default Counter;