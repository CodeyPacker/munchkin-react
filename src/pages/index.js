import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import MonsterCard from '../components/MonsterCard'
import monsterData from '../components/MonsterData'
// import styled from '@emotion/styled'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsterName: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value.toLowerCase(),
    })
  }

  render() {
    let enteredMonster = this.state.monsterName
    const monsterDetails = monsterData.find(
      monster => monster.name === enteredMonster
    )
    const userDirections = 'Enter a monster name'

    return (
      
      <div>
        <Layout />
        {/* <SearchIcon src="https://via.placeholder.com/20" alt='search for monster'/> */}
        <form>
          <StartInput
            type="text"
            value={this.state.monsterName}
            name="monsterName"
            placeholder="Monster Name"
            onChange={this.handleChange}
          />
        </form>
        {!enteredMonster ? (
          <Directions>{userDirections}</Directions>
        ) : (
          <MonsterCard info={monsterDetails} />
        )}
      </div>
    )
  }
}

// const SearchIcon = styled.button`
//   padding: 6px;
//   margin-left: 15px;
//   cursor: pointer;
//   background-color: #5d2ae5;
// `
const StartInput = styled.input`
  display: block;
  margin: 0 auto;
  padding: 5px;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  border: 1px solid rebeccapurple;
  border-radius: 5px;
`

const Directions = styled.h3`
  text-align: center;
`

// function App() {
//   const monsterDetails = monsterData.find(monster => monster.name === 'venom')

//   return (
//     <div>
//       <MonsterCard info = {monsterDetails} />
//     </div>
//   )
// }
export default App
