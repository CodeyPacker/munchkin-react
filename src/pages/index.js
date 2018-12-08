import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
// import MonsterCard from '../components/MonsterCard'
import monsterData from '../components/MonsterData'
// import styled from '@emotion/styled'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsterName: '',
      matchedMonsters: [],
      activeMonster: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.displayCard= this.displayCard.bind(this)
  }

  handleChange(event) {
    // CALLS THE FINDMATCHES FUNCTION AND PASSES IN THE USERS INPUT AND THE MONSTER ARRAY
    const matchArray = this.findMatches(event.target.value, monsterData);

    this.setState({
      [event.target.name]: event.target.value.toLowerCase(),
      // SETS THE NEW ARRAY TO A MAX LENGTH OF 5
      matchedMonsters: matchArray.slice(0, 5),
    })

  }

  // TAKES THE USERS INPUT AND RETURNS AN ARRAY WITH MATCHING ITEMS
  findMatches(wordToMatch, monsterData) {
    return monsterData.filter(monster => {
      const regex = new RegExp(wordToMatch, 'gi');
      return monster.name.match(regex)
    });
  }

  displayCard(event) {
    this.setState({
      activeMonster: event.target.value,
    })
    console.log(this.state.activeMonster);
  }

  render() {
    // let enteredMonster = this.state.monsterName
    // const monsterDetails = monsterData.find(
    //   monster => monster.name === enteredMonster
    // )
    // const userDirections = 'Enter a monster name'
    return (
      
      <div>
        <Layout />
        {/* <SearchIcon src="https://via.placeholder.com/20" alt='search for monster'/> */}
        <form autoComplete="off">
          <StartInput
            type="text"
            value={this.state.monsterName}
            name="monsterName"
            placeholder="Monster Name"
            onChange={this.handleChange}
          />
        </form>
        <ul>
          {this.state.matchedMonsters.map(monster => {
            return (
              <button key={monster.name} onClick={this.displayCard} value={monster.name}>{monster.name}</button>
            )
          })}
        </ul>
        {/* {!enteredMonster ? (
          <Directions>{userDirections}</Directions>
        ) : (
          <MonsterCard info={monsterDetails} />
        )} */}
      </div>
    )
  }
}

const StartInput = styled.input`
  display: block;
  margin: 0 auto;
  padding: 5px;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  border: 1px solid rebeccapurple;
  border-radius: 5px;
`

// const Directions = styled.h3`
//   text-align: center;
// `


export default App

// TODO: Take the value of the suggestion button that's clicked, 
// and display the matching monster card