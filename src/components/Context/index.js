import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {

  state = {
    players: [
      {
        name: "Me, lol",
        level: 1,
        oneShotItems: 0,
        equipment: 0,
        totalScore: 0,
        id: 1
      }
    ],
    monsters: [

    ],
    playerAdjectives: [
      'Cool', 'Rad', 'Bestie', 'Boring', 'Basic', 'Entire', 'Sappy', 'Happy', 'Sudden', 'Ugly', 'Guilty', 'Hungry', 'Pregnant', 'Willing', 'Famous', 'Distinct', 'Mental', 'Pleasant', 'Wooden', 'Alive', 'Southern', 'Nervous', 'Afraid', 'Healthy', 'Legal', 'Latter', 'Unfair', 'Decent',
      'Tiny', 'Baby', 'Alive', 'Killer', 'Unfair'
    ],
    playerNouns: [
      'ladder', 'worker', 'friend', 'enemy', 'pet', 'poetry', 'movie', 'uncle', 'oven', 'queen', 'nature', 'advice', 'river', 'gf', 'bf', 'driver', 'army', 'idea', 'music', 'virus', 'ball', 'mallet', 'waffle', 'pants', 'brush', 'thoughts', 'saint', 'person', 'being',
      'mouse', 'concept', 'dragon', 'sword', 'walrus'
    ],
    monsterArray: [],
    monsterQuery: [],
    matchedMonsters: [],
    activeMonsters: [],
    monsterIndex: ''
  }

  // player id counter
  prevPlayerId = this.state.players.length;

  handleMonsterInput = (e, data) => {
    this.monsterName = e.currentTarget.value
    this.monsterArray = [...data.allMonstersJson.edges].map(item => item.node.name)
    console.log(data)

    // CALLS THE FINDMATCHES FUNCTION AND PASSES IN THE USERS INPUT AND THE MONSTER ARRAY
    const matchArray = this.findMatches(e.target.value, this.monsterArray);

    this.setState({
      [e.target.name]: e.target.value.toLowerCase(),
      // SETS THE NEW ARRAY TO A MAX LENGTH OF 5
      matchedMonsters: matchArray.slice(0, 5),
      monsterArray : [...data.allMonstersJson.edges].map(item => item.node.name),
      monsterQuery : data.allMonstersJson.edges
    })
  }

  handleAddPlayer = () => {
    const playerAdjectives = this.state.playerAdjectives
    const playerNouns = this.state.playerNouns
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name: `${this.generateRandomWord(playerAdjectives)} ${this.generateRandomWord(playerNouns)}`,
            level: 1,
            oneShotItems: 0,
            equipment: 0,
            totalScore: 1,
            id: this.state.players.length + 1
          }
        ]
      };
    });
  }

  handleRemovePlayer = (id) => {
    this.prevPlayerId -= 1;
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleScoreChange = (index, delta, modifier) => {
    if (modifier === "level") {
      this.setState( prevState => ({
        modifier: prevState.players[index][modifier] += delta
      }));
    }

    if (modifier === "oneShotItems") {
      this.setState( prevState => ({
        oneShotItems: prevState.players[index][modifier] += delta
      }));
    }

    // equipment will ALWAYS be based on the first player [0]
    if (modifier === "equipment") {
      this.setState( prevState => ({
        equipment: prevState.players[0][modifier] += delta
      }));
    }
  }

  generateRandomWord = (word) => {
    const randomNumber = Math.floor(Math.random() * word.length);
    return word[randomNumber]
    // this.state.type[random]
  }

  findMatches(wordToMatch, monsterData) {
    return monsterData.filter(monster => {
      const regex = new RegExp(wordToMatch, 'gi')
      return monster.match(regex)
    });
  }

  getActiveMonster = (e) => {
    const monsterName = e.target.value
    const monsterIndex = this.state.monsterArray.indexOf(monsterName)
    const activeMonster = this.state.monsterQuery[monsterIndex].node

    this.setState( prevState => {
      return {
        monsters: [
          ...prevState.monsters,
          {
            name: activeMonster.name,
            abilities: activeMonster.abilities,
            badStuff: activeMonster.bad,
            levels: activeMonster.levels,
            power: activeMonster.power,
            set: activeMonster.set,
            treasures: activeMonster.treasure
          }
        ]
      }
    })

    console.log(this.state.monsters)
  }


  render() {
    return (
      <ScoreboardContext.Provider value={{
        players: this.state.players,
        monsters: this.state.monsters,
        matchedMonsters: this.state.matchedMonsters,
        actions: {
          changeScore: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer,
          addPlayer: this.handleAddPlayer,
          monsterChange: this.handleMonsterInput,
          findMatches: this.findMatches,
          getActiveMonster: this.getActiveMonster
        }
      }}>
        { this.props.children }
      </ScoreboardContext.Provider>
    );
  }
}

export const Consumer = ScoreboardContext.Consumer;

