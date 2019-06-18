import React from 'react'
import styled from '@emotion/styled'
import { Consumer } from '../Context';
import PlayerCounter from './PlayerCounter'


const Player = () => {
  return (
    <Consumer>
      { ({ players }) => (
        <PlayerWrapper>
          <PlayerImage src="https://via.placeholder.com/150" alt="lol"/>
          <p>hi lol, i'm {players[0].name}.</p>
          <p>Total Score with my gear is {players[0].baseScore}</p>
          <PlayerCounter modifier="baseScore"/>
        </PlayerWrapper>
      )}
    </Consumer>
  );
}

const PlayerWrapper = styled.div`
  margin-right: 15px;
  margin-left: 15px;
  text-align: center;
`

const PlayerImage = styled.img`
  margin: 0 auto;
  display: block;
  padding-top: 26px;
  padding-bottom: 26px;
`
export default Player