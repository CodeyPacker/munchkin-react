import React from 'react';
import Monster from './Monster';
import { Consumer } from '../Context';

const MonsterList = () => {
  return (
    <Consumer>
      { context => (
        <React.Fragment>
          {context.monsters.map( (monster, index) =>
            <Monster
              {...monster}
              key={monster.name}
              index={index}
              changeMonsterScore={context.changeMonsterScore}
              removeMonster={context.actions.removeMonster}
            />
          )}
        </React.Fragment>
      )}
    </Consumer>
 );
}

export default MonsterList;