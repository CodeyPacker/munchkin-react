import React from 'react'
const cardStyles = {
  width: '300px',
  minHeight: '375px',
  margin: '20px auto',
  padding: '15px',
  borderRadius: '10px',
  boxShadow: '0px 2px 10px 0px rgba(92,92,92,1)'
}

const defaultPadding = {
  padding: '15px'
}

function MonsterCard(props) {
  if (props.info === undefined) {
    return (
      <h3 style={defaultPadding}>Finding Monster...</h3>
    )
  }

  return (
    <div style={cardStyles}>
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

export default MonsterCard