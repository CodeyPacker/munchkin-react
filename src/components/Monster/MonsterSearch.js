import React from 'react';
import { Consumer } from '../Context';
import { StaticQuery, graphql } from 'gatsby'

// const MonsterData = ({ children }) => (
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
//     render={monsterData => (
//       <div>
//         <input value={this.state.inputValue} onChange={(e) => handleChange(massageData(data, e))} />
//         {/* {this.state.filteredMonsters} */}
//       </div>
//     )}
//   />
// )

const MonsterSearch = () => {
  return (
    <Consumer>
      { context => (
        <div>
          <StaticQuery
            query={graphql`
              query MonstersQuery {
                allMonstersJson {
                  edges {
                    node {
                      name
                      set
                      power
                      treasure
                      levels
                      abilities
                      bad
                    }
                  }
                }
              }
            `}
            render={monsterData => (
              // monsterData contains a bunch of nodes, so we're not able to filter over these.
              // Instead, create an array with the monster names, and use the index of that array
              // to search the graphQL data
              <div>
                {/* <input value={this.state.inputValue} onChange={(e) => handleChange(massageData(data, e))} /> */}
                {/* {this.state.filteredMonsters} */}
                {/* {monstersArray = [...monsterData.allMonstersJson.edges].map(item => item.node.name)} */}
                <input
                  value={context.monsterInputValue}
                  onChange={(e) => context.actions.monsterChange(e, monsterData)}
                  placeholder="Monster Name"
                />
              </div>
            )}
          />
        </div>
      )}
    </Consumer>
 );
}

export default MonsterSearch;