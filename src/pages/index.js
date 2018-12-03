import React from 'react'
import Layout from '../components/layout'
import MonsterCard from '../components/MonsterCard'
import monsterData from '../components/MonsterData'

const defaultPadding = {
  paddingLeft: '15px',
  paddingRight: '15px'
}

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
          <h3 style={defaultPadding}>{userDirections}</h3> :
          <MonsterCard info={monsterDetails}/>
        }
        <form style={{maxWidth: '175px', margin: '0 auto'}}>
          <input 
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