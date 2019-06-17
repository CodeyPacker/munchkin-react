import React from 'react'
import PlayerScore from './PlayerScore'
import styled from '@emotion/styled'

const FeatureScores = () => (
  <FeatureScoresWrapper>
    <Constraint>
      <PlayerScore/>
      <PlayerScore/>
    </Constraint>
  </FeatureScoresWrapper>
)

const Constraint = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 190px;
  width: 100%;
  padding-top: 26px;
  padding-bottom: 26px;
  margin: 0 auto;
`
const FeatureScoresWrapper = styled.div`
  border-bottom: 5px solid #8063FA;
`


export default FeatureScores