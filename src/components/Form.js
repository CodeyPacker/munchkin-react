import React from 'react'
import styled from '@emotion/styled'
import MonsterCard from './MonsterCard'
import MonsterData from './MonsterData'

function Form(props) {
  // Get the monster object that gets passed as a prop to MonsterCard
  let enteredMonster = props.data.activeMonster
  const monsterDetails = MonsterData.find(
    monster => monster.name === enteredMonster
  )

  return (    
    <div>
      <form autoComplete="off">
        <StartInput
          type="text"
          value={props.data.monsterName}
          name="monsterName"
          placeholder="Monster Name"
          onChange={props.handleChange}
        />
      </form>
        <SuggestionContainer>
          {props.data.matchedMonsters.map(monster => {
            return (
              <Suggestion 
                key={monster.name} 
                onClick={props.getActiveMonster} 
                value={monster.name}>
                {monster.name
                  .toLowerCase()
                  .split(' ')
                  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ')
                }
              </Suggestion>
            )
          })}
        </SuggestionContainer>
        
        {/* If the activeMonster isn't an empty string, which it is by default.
            Then, display the monster card and pass in the object that we made above */}
        {props.data.activeMonster !== '' ? <MonsterCard info={monsterDetails}/> : null}
    </div>
  )
}

const StartInput = styled.input`
  display: block;
  font-size: 25px;
  width: calc(100% - 30px);
  max-width: 350px;
  margin: 15px auto;
  padding: 5px;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  border: 2px solid #5d2ae5;
  border-radius: 5px;
`

const SuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Suggestion = styled.button`
  width: calc(100% - 30px);
  max-width: 350px;
  margin: 5px auto;
  font-size: 25px;
  line-height: 30px;
  padding: 10px;
  color: white;
  border-radius: 5px;
  background-color: #5d2ae5;
  border: 1px solid #5d2ae5;
  font-family: 'Quicksand', sans-serif;
`

export default Form