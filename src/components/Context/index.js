import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {

  state = {
    players: [
      {
        name: "Player 1",
        score: 25,
        id: 1
      }
    ],
    monsters: [
      {
        name: "Venom",
        score: 25,
        id: 1
      }
    ]
  };

 // player id counter
 prevPlayerId = 1;

 handleScoreChange = (index, delta) => {
   this.setState( prevState => ({
     score: prevState.players[0].score += delta
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

