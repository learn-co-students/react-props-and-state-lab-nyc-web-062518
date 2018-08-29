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

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeFilterType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  changeFilterType = (event) => {
    this.setState({...this.state, filters: {...this.state.filters, type: event.target.value}})
  }

  fetchPets = () => {
    let searchTerm = this.state.filters.type
    if (searchTerm === 'all') {
      fetch('/api/pets').then(resp => resp.json()).then(data => this.setState({pets: data}))
    } else {
      fetch(`/api/pets?type=${searchTerm}`).then(resp => resp.json()).then(data => this.setState({pets: data}))
    }
  }

  onAdoptPet = (petId) => {
    let updatedPets = this.state.pets.map(pet => {
      if (pet.id === petId) {
        return {...pet, isAdopted: true}
      } else {
        return pet
      }
    })
    this.setState({pets: updatedPets})
  }

}

export default App
