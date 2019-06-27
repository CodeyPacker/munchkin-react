import React from 'react'
import { Consumer } from '../Context';
import styled from '@emotion/styled'

const AddPlayer = () => (
  <Consumer>
    { context => (
      <div>
        {console.log(context.actions.addPlayer)}
        <AddPlayerButton onClick={context.actions.addPlayer}>Add Player</AddPlayerButton>
      </div>
    )}
  </Consumer>
)

const AddPlayerButton = styled.button`
`

export default AddPlayer