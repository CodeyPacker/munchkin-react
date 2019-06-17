import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <Navigation>
    <NavLink exact to="/">Player</NavLink>
    <NavLink exact to="/battle">Battle</NavLink>
    <NavLink to="/board">Board</NavLink>
  </Navigation>
)

const Navigation = styled.div`
  display: flex;

  a {
    width: 33.33vw;
    color: #ffffff;
    background-color: #8063FA;
    padding: 12px 15px;
    text-align: center;
    text-decoration: none;
    font-family: 'Montserrat', 'sans-serif';
    transition: all .1s;
    border-right: 1px solid #5B45B9;

    &:hover {
      font-size: 120%;
    }

    &:first-of-type {
      background-color: #5B45B9;
    }
  }
`

export default Header
