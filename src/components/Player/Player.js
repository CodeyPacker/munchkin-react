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
          <p className="name">{ name }</p>
        </span>

        <Counter index={index} modifier="oneShotItems"/>

      </PlayerWrapper>
    );
  }
}

const PlayerWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border-bottom: 1px solid #EEEEEE;
  padding-right: 15px;
  padding-left: 15px;
  font-family: 'Montserrat', 'sans-serif';
  color: #4C4C4D;

  .name {
    font-size: 25px;
    margin-bottom: 0;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`
export default Player;