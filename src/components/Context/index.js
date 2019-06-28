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
      {
        name: "Venom",
        score: 10,
        id: 1,
        totalScore: 1,
      }
    ],
    playerAdjectives: [
      'Cool', 'Rad', 'Bestie', 'Boring', 'Basic', 'Entire', 'Sappy', 'Happy', 'Sudden', 'Ugly', 'Guilty', 'Hungry', 'Pregnant', 'Willing', 'Famous', 'Distinct', 'Mental', 'Pleasant', 'Wooden', 'Alive', 'Southern', 'Nervous', 'Afraid', 'Healthy', 'Legal', 'Latter', 'Unfair', 'Decent',
      'Tiny', 'Baby', 'Alive', 'Killer', 'Unfair'
    ],
    playerNouns: [
      'ladder', 'worker', 'friend', 'enemy', 'pet', 'poetry', 'movie', 'uncle', 'oven', 'queen', 'nature', 'advice', 'river', 'gf', 'bf', 'driver', 'army', 'idea', 'music', 'virus', 'ball', 'mallet', 'waffle', 'pants', 'brush', 'thoughts', 'saint', 'person', 'being',
      'mouse', 'concept', 'dragon', 'sword', 'walrus'
    ]
  };

  // player id counter
  prevPlayerId = this.state.players.length;

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


  render() {
    return (
      <ScoreboardContext.Provider value={{
        players: this.state.players,
        monsters: this.state.monsters,
        actions: {
          changeScore: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer,
          addPlayer: this.handleAddPlayer
        }
      }}>
        { this.props.children }
      </ScoreboardContext.Provider>
    );
  }
}

export const Consumer = ScoreboardContext.Consumer;

