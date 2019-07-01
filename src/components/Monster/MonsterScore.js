import React from 'react'
import styled from '@emotion/styled'
import { Consumer } from '../Context';
import MonsterImage from '../../images/monster.svg'

// This is the section that shows the total scores of the
// Players vs Monsters on the battle page

const MonsterScore = () => {
  return (
    <Consumer>
      { ({ monsters }) => (
        <ScoreContainer>
          <img src={MonsterImage} alt="lol"/>
          {/* <Score>{monsters[0].score}</Score> */}
          <Score>
          {monsters.reduce(function(prev, cur) {
              return prev += cur.power;
            }, 0)}
          </Score>
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
  font-size: 30px;
  font-family: 'Montserrat', 'sans-serif';
  margin-bottom: 0;
`

export default MonsterScore