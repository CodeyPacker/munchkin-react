import React from 'react'
import styled from '@emotion/styled'
import { Consumer } from '../Context';
import PlayerImage from '../../images/player.svg'

// This is the section that shows the total scores of the
// Players vs Monsters on the battle page

const PlayerScore = () => {
  return (
    <Consumer>
      { ({ players }) => (
        <ScoreContainer>
          <img src={PlayerImage} alt="lol"/>
          <Score>{players[0].baseScore + players[0].oneShotItems}</Score>
        </ScoreContainer>
      )}
    </Consumer>
  )
}


const ScoreContainer = styled.div`

  img {
    margin-bottom: 8px;
  }
`

const Score = styled.p`
  text-align: center;
  font-size: 25px;
  font-family: 'Montserrat', 'sans-serif';
  margin-bottom: 0;
`

export default PlayerScore