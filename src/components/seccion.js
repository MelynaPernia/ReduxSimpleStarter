import React from 'react'
const SectionnHobbies = (props) => {
  const listas = [];
  let arr = props.hobbies
  arr.forEach(element => {
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