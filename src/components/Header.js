import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <Navigation>
    <NavLink exact to="/">Battle</NavLink>
    <NavLink to="/board">Board</NavLink>
  </Navigation>
)

const Navigation = styled.div`
  display: flex;

  a {
    width: 100%;
    color: #ffffff;
    background-color: #8063FA;
    padding: 12px 15px;
    text-align: center;
    text-decoration: none;
    font-family: 'Montserrat', 'sans-serif';

    &:hover {
      font-size: 120%;
    }

    &:first-of-type {
      background-color: #5B45B9;
    }
  }
`

export default Header
