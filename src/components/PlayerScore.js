import React from 'react'
import styled from '@emotion/styled'

const PlayerScore = (props) => (
  <PlayerContainer>
    <img src="https://via.placeholder.com/75" alt="lol"/>
    <Score>22</Score>
  </PlayerContainer>
)

const PlayerContainer = styled.div`

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