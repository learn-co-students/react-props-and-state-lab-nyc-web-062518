import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    let i = 0
    const mappedPets = this.props.pets.map(pet => {
      return <Pet pet={pet} key={i++} onAdoptPet={this.props.onAdoptPet}/>
    })
    return <div className="ui cards">{mappedPets}</div>
  }
}

export default PetBrowser
