import React from 'react';
import { Consumer } from '../Context';

const Counter = () => {
  return (
    <Consumer>
      { ({ actions, monsters }) => (
        <div className="counter">
          <button className="counter-action decrement" onClick={() => actions.changeScore(monsters[0], -1)}> - </button>
          <span className="counter-score">{ monsters[0].score }</span>
          <button className="counter-action increment" onClick={() => actions.changeScore(monsters[0], 1)}> + </button>
        </div>
      )}
    </Consumer>
  );
}

export default Counter;