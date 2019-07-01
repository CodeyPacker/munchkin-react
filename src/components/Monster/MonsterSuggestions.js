import React from 'react';
import { Consumer } from '../Context';
import styled from '@emotion/styled'

const MonsterSuggestions = () => {
  return (
    <Consumer>
      { context => (
        <div>
          {context.matchedMonsters.map((monster, i) => {
            return (
              <Suggestion
                onClick={(e) => context.actions.getActiveMonster(e)}
                key={context.matchedMonsters[i]}
                value={context.matchedMonsters[i]}>
                {context.matchedMonsters[i]}
              </Suggestion>
            )
          })}
        </div>
      )}
    </Consumer>
 );
}

const Suggestion = styled.button`
  width: calc(100% - 30px);
  max-width: 350px;
  margin: 5px auto;
  font-size: 25px;
  line-height: 30px;
  padding: 10px;
  color: white;
  border-radius: 5px;
  background-color: #5d2ae5;
  border: 1px solid #5d2ae5;
  font-family: 'Montserrat', 'sans-serif';
`

export default MonsterSuggestions;