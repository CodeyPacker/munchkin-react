import React from 'react'
const styles = {
  width: '300px',
  display: 'inline-block',
  minHeight: '375px',
  margin: '20px',
  padding: '15px',
  borderRadius: '10px',
  boxShadow: '0px 2px 10px 0px rgba(92,92,92,1)'
}

function MonsterCard(props) {
  if (props.isLoading) {
    return (
      <h1>Finding Monster...</h1>
    )
  }

  return (
    <div style={styles}>
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
