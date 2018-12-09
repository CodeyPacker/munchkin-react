import React from 'react'
import styled from '@emotion/styled'

function MonsterCard(props) {
  console.log(props);
  return (
    <Card>
      <MonsterLevel>Level {props.info.power}</MonsterLevel>
      <MonsterName>{props.info.name}</MonsterName>
      <SectionHighlight>Abilities</SectionHighlight>
      <MonsterDetails>{props.info.abilities}</MonsterDetails>
      <SectionHighlight>Bad stuff</SectionHighlight>
      <MonsterDetails>{props.info.bad}</MonsterDetails>
      <MonsterRewards>
        <p>Treasure: {props.info.treasure}</p>
        <p>Levels: {props.info.levels}</p>
      </MonsterRewards>
    </Card>
  )
}

const Card = styled.div`
  width: 300px;
  min-height: 375px;
  margin: 20px auto;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px 0px rgba(92,92,92,1);
  font-family: 'Quicksand', sans-serif;
`
const MonsterLevel = styled.p`
  color: #5d2ae5;
  text-align: center;
  margin-bottom: 15px;
`
const MonsterName = styled.h3`
  color: #5d2ae5;
  text-align: center;
  margin-bottom: 15px;
  text-transform: capitalize;
`

const SectionHighlight = styled.p`
    width: 100px;
    font-weight: 100;
    text-align: right;
    padding: 2px;
    background-color: gold;
    border-radius: 1px;
    color: black;
    box-shadow: 0px 1px 5px 0px #a3a3a3;
`
const MonsterDetails = styled.p`
  padding-left: 15px;
  padding-right: 15px;
`

const MonsterRewards = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  color: #5d2ae5
`

export default MonsterCard