import React, { PureComponent } from 'react';
import Counter from '../Counter';
import styled from '@emotion/styled'

class Player extends PureComponent {
  render() {

    const {
      name,
      // id,
      // score,
      index
      // removePlayer,
      // changeScore
    } = this.props;

    return (
      <PlayerWrapper className="player">
        <span className="player-name">
          {/* <button className="remove-player" onClick={() => removePlayer(id)}>✖</button> */}
          { name }
        </span>

        <Counter index={index} modifier="oneShotItems"/>

      </PlayerWrapper>
    );
  }
}

const PlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #EEEEEE;
  padding-right: 15px;
  padding-left: 15px;
  font-family: 'Montserrat', 'sans-serif';
  color: #4C4C4D;
`
export default Player;