import React from 'react'
import Layout from '../components/layout'
import MonsterCard from '../components/MonsterCard'
import monsterData from '../components/MonsterData'

// function App() {
//   const monsterDetails = monsterData.find(monster => monster.name === 'venom')

//   return (
//     <div>
//       <MonsterCard info = {monsterDetails} />
//     </div>
//   )
// }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render() {
    const monsterDetails = monsterData.find(monster => monster.name === 'venom')

    return(
      <div>
        <Layout />
        <MonsterCard info={monsterDetails} isLoading={this.state.isLoading}/>
      </div>
    )
  }
}

export default App
