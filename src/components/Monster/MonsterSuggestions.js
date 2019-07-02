import React from 'react';
import { Consumer } from '../Context';
import styled from '@emotion/styled'

const MonsterSuggestions = () => {
  return (
    <Consumer>
      { context => (
        <SuggestionContainer>
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
        </SuggestionContainer>
      )}
    </Consumer>
 );
}

const SuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`

const Suggestion = styled.button`
  width: calc(100% - 30px);
  max-width: 400px;
  margin: 5px auto;
  font-size: 25px;
  line-height: 30px;
  padding: 10px;
  color: white;
  border-radius: 5px;
  background-color: #8063FA;
  border: 1px solid #8063FA;
  font-family: 'Montserrat', 'sans-serif';
`

export default MonsterSuggestions;