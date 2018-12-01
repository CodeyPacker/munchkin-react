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
  return(
    <div style={styles}>
      <h3>{props.name}</h3>
      <p>{`${props.set} set`}</p>
      <p>{`Power: ${props.power}`}</p>
      <p>{`Treasures: ${props.treasure}`}</p>
      <p>{`Levels: ${props.levels}`}</p>
      <p>{`Abilities: ${props.abilities}`}</p>
      <p>{`Bad stuff: ${props.bad}`}</p>
  </div>
  )
}

export default MonsterCard
