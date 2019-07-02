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
  justify-content: center;
  background-color: #8063FA;
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

export default MonsterSearch;