import React from 'react'
import Pet from './Pet'

const PetBrowser = ({pets, onAdoptPet}) => {
  const formattedPets = pets.map(pet => {
    return (
      <div>
        <Pet pet={pet} key={pet.id} onAdoptPet={onAdoptPet} />
      </div>
    )
  })

  return (
    <div className="ui cards">
      {formattedPets}
    </div>
  )
}

export default PetBrowser
