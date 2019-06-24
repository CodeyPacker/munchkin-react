import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {

  state = {
    players: [
      {
        name: "Player 1",
        baseScore: 1,
        oneShotItems: 0,
        id: 1
      }
    ],
    monsters: [
      {
        name: "Venom",
        score: 10,
        id: 1
      }
    ]
  };

 // player id counter
 prevPlayerId = 1;

 handleScoreChange = (index, delta, modifier) => {

  //  let scoreType = this.players[0].baseScore;
   console.log(modifier)
  //  if (modifier === "oneShotItems") {
  //   scoreType = this.players[0].oneShotItems
  //  }

  // const mod = modifier === "baseScore" ? this.state.players[0].baseScore : this.state.players[0].oneShotItems
   this.setState( prevState => ({
    score: prevState.players[0][modifier] += delta
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

