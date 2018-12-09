import React from 'react'
import monsterData from './MonsterData'
import Form from './Form'

class FormContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      monsterName: '',
      matchedMonsters: [],
      activeMonster: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.getActiveMonster= this.getActiveMonster.bind(this)
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

  // WHEN A MONSTER BUTTON IS CLICKED, RESET THE MATCHEDMONSTERS ARRAY TO REMOVE SUGGESTIONS
  getActiveMonster(event) {
    this.setState({
      activeMonster: event.target.value,
      matchedMonsters: [],
    })
  }

  render() {
    return (
    <Form getActiveMonster={this.getActiveMonster} handleChange={this.handleChange} data={this.state}/>
    )
  }
}

export default FormContainer