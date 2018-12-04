import React from 'react'
import ReactCardFlip from 'react-card-flip';
import { css } from 'emotion'

const cardStyles = css`
  width: 100%;
  min-height: 350px;
  transition: margin-left .3s;
  overflow: hidden;
  
  @media screen and (min-width: 376px){
    width: 300px;
    min-height: 375px;
    margin: 20px auto;
    border-radius: 10px;
    -webkit-box-shadow: 0px 2px 10px 0px rgba(92,92,92,1);
    -moz-box-shadow: 0px 2px 10px 0px rgba(92,92,92,1);
    box-shadow: 0px 2px 10px 0px rgba(92,92,92,1);
  }
`

const defaultPadding = {
  padding: '15px'
}

function BackCard(props) {
  if (props.info === undefined) {
    return (
      <h3 style={defaultPadding}>Finding Monster...</h3>
    )
  }

  return (
    <div className={cardStyles}>
      <h2>Back of Card</h2>
      <h3>{props.info.name}</h3>
      <p>{props.info.set}</p>
      <p>{props.info.power}</p>
      <p>{props.info.treasure}</p>
      <p>{props.info.levels}</p>
      <p>{props.info.abilities}</p>
      <p>{props.info.bad}</p>
    </div>
  )
}

export default BackCard