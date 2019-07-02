import React, { PureComponent } from 'react';
import MonsterCounter from '../Monster/MonsterCounter';
import styled from '@emotion/styled'

class Monster extends PureComponent {
  render() {
    const {
      name,
      id,
      index,
      removeMonster,
    } = this.props;

    return (
      <MonsterWrapper className="monster">
        <span className="monster-name">
          <p className="name">{ name }</p>
          <button className="remove-monster" onClick={() => removeMonster(id)}>✖</button>
        </span>

        <MonsterCounter index={index} modifier="oneShotItems"/>
      </MonsterWrapper>
    );
  }
}

const MonsterWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border-bottom: 1px solid #EEEEEE;
  font-family: 'Montserrat', 'sans-serif';
  color: #4C4C4D;
  max-width: 700px;
  width: calc(100% - 30px);
  margin: 0 auto;

  .monster-name {
    display: flex;
    width: 100%;
    line-height: 28px;
    padding-right: 15px;
  }

  .remove-monster {
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
    position: relative;
    z-index: -1;

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
export default Monster;