import React from 'react'
const SectionnHobbies = ({ hobbies }) => {
  const listas = [];
  hobbies.forEach(element => {
    listas.push(<li key={element}>{element}</li>)
  })
  return (

    <section>
      <ul>
        {listas}
      </ul>

    </section>
  )
}
export default SectionnHobbies