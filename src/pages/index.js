
import React from 'react'
import Layout from '../components/layout'
import MonsterCard from '../components/MonsterCard'
import monsterData from '../components/MonsterData'
import { css } from 'emotion'

const defaultPadding = css`
  padding-left: '15px';
  padding-right: '15px';
`;

const monsterInput = css`
  margin: 0 auto;
  padding-left: '15px';
  padding-right: '15px';
`;

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsterName: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value.toLowerCase()
    })
  }


  render() {
    let enteredMonster = this.state.monsterName
    const monsterDetails = monsterData.find(monster => monster.name === enteredMonster)
    const userDirections = 'Enter a monster name'

    return(
      <div>
        <Layout />
        {
          !enteredMonster ? 
          <h3 className={defaultPadding}>{userDirections}</h3> :
          <MonsterCard info={monsterDetails}/>
        }
        <form>
          <input 
            className= {monsterInput}
            type='text' 
            value={this.state.monsterName} 
            name='monsterName'
            placeholder='Start Battle'
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

// function App() {
//   const monsterDetails = monsterData.find(monster => monster.name === 'venom')

//   return (
//     <div>
//       <MonsterCard info = {monsterDetails} />
//     </div>
//   )
// }
export default App