import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {

  state = {
    players: [
      {
        name: "Player 1",
        baseScore: 1,
        oneShotItems: 0,
        totalScore: 0,
        id: 1
      },
      {
        name: "Player 2",
        baseScore: 1,
        oneShotItems: 0,
        totalScore: 0,
        id: 2
      }
    ],
    monsters: [
      {
        name: "Venom",
        score: 10,
        id: 1,
        totalScore: 1,
      }
    ]
  };

 // player id counter
 prevPlayerId = 1;

 handleScoreChange = (index, delta, modifier) => {
  this.setState( prevState => ({
    baseScore: prevState.players[index][modifier] += delta
  }));
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

