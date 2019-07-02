import React from 'react'
import { Consumer } from '../Context';
import styled from '@emotion/styled'

const AddPlayer = () => (
  <Consumer>
    { context => (
      <AddPlayerWrapper>
        <button onClick={context.actions.addPlayer}>Add Player</button>
      </AddPlayerWrapper>
    )}
  </Consumer>
)

const AddPlayerWrapper = styled.div`
  margin-top: auto;

  button {
    background-color: #8063FA;
    color: white;
    padding: 10px 15px;
    border: 0;
    font-family: 'Montserrat', 'sans-serif';
    :focus { outline: none; }
  }
`

export default AddPlayer