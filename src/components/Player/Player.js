import React, { PureComponent } from 'react';
import PlayerCounter from './PlayerCounter';
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

        <PlayerCounter index={index} modifier="oneShotItems"/>

      </PlayerWrapper>
    );
  }
}

const PlayerWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border-bottom: 1px solid #EEEEEE;
  ${'' /* padding-right: 30px;
  padding-left: 30px; */}
  font-family: 'Montserrat', 'sans-serif';
  color: #4C4C4D;
  max-width: 700px;
  width: calc(100% - 30px);
  margin: 0 auto;

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
    -webkit-text-stroke-color: #F9A7A7;
    opacity: .5;
    cursor: pointer;
    transition: -webkit-text-stroke-width, color, opacity .2s;

    :hover {
      color: #F9A7A7;
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