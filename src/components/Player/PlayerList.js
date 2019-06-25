import React from 'react';
import Player from './Player';
import { Consumer } from '../Context';

const PlayerList = () => {
  return (
    <Consumer>
      { context => (
        <React.Fragment>
          {context.players.map( (player, index) =>
            <Player
              {...player}
              key={player.id.toString()}
              index={index}
              changeScore={context.changeScore}
              removePlayer={context.removePlayer}
            />
          )}
        </React.Fragment>
      )}
    </Consumer>
 );
}

export default PlayerList;