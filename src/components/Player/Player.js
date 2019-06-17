import React from 'react'
import styled from '@emotion/styled'
import { Consumer } from '../Context';
import PlayerCounter from './PlayerCounter'


const Player = () => {
  return (
    <Consumer>
      { ({ players }) => (
        <div>
          <PlayerImage src="https://via.placeholder.com/150" alt="lol"/>
          <p>hi lol, i'm {players[0].name}.</p>
          <p>Total Score: {players[0].score}</p>
          <PlayerCounter/>
        </div>
      )}
    </Consumer>
  );
}

const PlayerImage = styled.img`
  margin: 0 auto;
  display: block;
  padding-top: 26px;
  padding-bottom: 26px;
`
export default Player