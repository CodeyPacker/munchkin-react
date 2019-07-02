import React from 'react';
import { Consumer } from '../Context';
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

const MonsterSearch = () => {
  return (
    <Consumer>
      { context => (
        <div>
          <StaticQuery
            query={graphql`
              query MonstersQuery {
                allMonstersJson {
                  edges {
                    node {
                      name
                      set
                      power
                      treasure
                      levels
                      abilities
                      bad
                    }
                  }
                }
              }
            `}
            render={monsterData => (
              // monsterData contains a bunch of nodes, so we're not able to filter over these.
              // Instead, create an array with the monster names, and use the index of that array
              // to search the graphQL data
              <InputContainer>
                <MonsterInput
                  onChange={(e) => context.actions.monsterChange(e, monsterData)}
                  placeholder="Monster Name"
                />
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
              </InputContainer>
            )}
          />
        </div>
      )}
    </Consumer>
 );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #8063FA;
  position: relative;
`
const MonsterInput = styled.input`
  max-width: 700px;
  width: calc(100% - 30px);
  margin: 15px auto;
  background-color: #5B45B9;
  border: 0;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 18px;

  :focus {
      outline: none;
    }
`

const SuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: absolute;
  top: 76px;
  width: 100%;
`

const Suggestion = styled.button`
  width: calc(100% - 30px);
  max-width: 350px;
  margin: 5px auto;
  font-size: 25px;
  line-height: 30px;
  padding: 10px;
  color: white;
  border-radius: 5px;
  background-color: #8063FA;
  border: 1px solid #8063FA;
  font-family: 'Montserrat', 'sans-serif';
  :focus {
    outline-color: #5B45B9;
  }
`


export default MonsterSearch;