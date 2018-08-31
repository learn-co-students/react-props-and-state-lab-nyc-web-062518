import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (e) => {
    const newState = {
      ...this.state
    }
    newState.filters.type = e.target.value
    this.setState(newState)
  }

  onAdoptPet = (id) => {
    const newState = this.state.pets.map(pet => {
      if (pet.id === id ) {
        return {...pet, isAdopted: true}
      } else {
        return pet
      }
    })
    this.setState({pets: newState})
  }

  onFindPetsClick = (e) => {
    let url = '/api/pets'

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }

    fetch(url).then(r=>r.json()).then(pets => this.setState({pets}))
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
