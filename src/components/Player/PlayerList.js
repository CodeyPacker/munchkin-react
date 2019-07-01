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
              changePlayerScore={context.changePlayerScore}
              removePlayer={context.actions.removePlayer}
            />
          )}
        </React.Fragment>
      )}
    </Consumer>
 );
}

export default PlayerList;