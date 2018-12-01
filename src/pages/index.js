import React from 'react'
import Layout from '../components/layout'
import MonsterCard from '../components/MonsterCard'
import monsterData from '../components/MonsterData'

// const IndexPage = () => (
//   <div>
//   <Layout />
//   <MonsterCard 
//     info = {{
//       name: "venom",
//       set: "marvel",
//       power: 10,
//       treasure: 3,
//       levels: 1,
//       abilities: "-3 against Spider-friends. You may discard Klaw's Sonic Blaster to automatically defeat him (gain treasures, but no levels).",
//       bad: "If you are wearing armor, you have -5 in your next combat. If not, -10!"
//     }}
//   />
//   </div>
// )

function IndexPage() {
  const monsterCards = monsterData.map(monster => 
    <MonsterCard 
      key={monster.name}
      name={monster.name}
      set={monster.set}
      power={monster.power}
      treasure={monster.treasure}
      levels={monster.levels}
      abilities={monster.abilities}
      bad={monster.bad}
    />)

  return (
    <div>
        {monsterCards}            
    </div>
  )
}
export default IndexPage
