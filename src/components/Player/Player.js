import React, { PureComponent } from 'react';
import Counter from '../Counter';
import styled from '@emotion/styled'

class Player extends PureComponent {
  render() {
    const {
      name,
      id,
      index,
      removePlayer,
    } = this.props;

    return (
      <PlayerWrapper className="player">
        <span className="player-name">
          <p className="name">{ name }</p>
          {id > 1 ? <button className="remove-player" onClick={() => removePlayer(id)}>✖</button> : ''}
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
  padding-right: 30px;
  padding-left: 30px;
  font-family: 'Montserrat', 'sans-serif';
  color: #4C4C4D;

  .player-name {
    display: flex;
    width: 100%;
    line-height: 28px;
    padding-right: 15px;
  }

  .remove-player {
    margin-left: auto;
    padding-right: 5px;
    align-self: center;
    font-size: 20px;
    color: white;
    background-color: white;
    height: 25px;
    border: 0;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #8063FA;
    opacity: .5;
    cursor: pointer;
    transition: -webkit-text-stroke-width, color, opacity .2s;

    :hover {
      color: #8063FA;
      opacity: 1;
    }

    :focus {
      outline: none;
    }
  }

  .name {
    font-size: 25px;
    margin-bottom: 0;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`
export default Player;