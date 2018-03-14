import React from 'react';
import Header from './header'
import SectionHobbies from './seccion'

const data = { info: 'Hola soy Melyna', hobbies: ['jugar', 'cantar', 'leer'] }

const App = () => {
  return (
    <div>
      <Header data={data.info} />
      <SectionHobbies hobbies={data.hobbies} />
    </div>
  )
}

export default App
