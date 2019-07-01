// import React, { useState } from 'react';
// import { StaticQuery, graphql } from 'gatsby'
// // let getMonster = []

// const [inputValue, setInputValue] = useState('');

// const handleSearchChange = (data, e) => {

//   setInputValue('')

//   console.log(e)
//   console.log(data)
//   const regex = new RegExp(e.target.value, 'gi')
//   return data.match(regex)
// }

// const massageData = data => [...data.allMonstersJson.edges].map(item => item.node.name)

// const Monsters = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query MonstersQuery {
//         allMonstersJson {
//           edges {
//             node {
//               name
//               set
//               power
//               treasure
//               levels
//               abilities
//               bad
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <div>
//         <input value={this.state.inputValue} onChange={(e) => handleChange(massageData(data, e))} />
//         {/* {this.state.filteredMonsters} */}
//       </div>
//     )}
//   />
// )

// export default Monsters