import React from 'react'

const Pet = ({ pet: { id, name, type, gender, age, weight, isAdopted }, onAdoptPet }) => (
  <div key={id} className="card">
    <div className="content">
      <a className="header">
        {name} {gender==="female"?'♀':'♂'}
      </a>
      <div className="meta">
        <span className="date">{type}</span>
      </div>
      <div className="description">
        <p>Age: {age}</p>
        <p>Weight: {weight}</p>
      </div>
    </div>
    <div className="extra content">
      {isAdopted ? (
        <button className="ui disabled button">Already Adopted</button>
      ) : (
        <button onClick={() => onAdoptPet(id)} className="ui primary button">
          Adopt Pet
        </button>
      )}
    </div>
  </div>
)


export default Pet
