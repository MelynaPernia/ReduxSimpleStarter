import React from 'react';
import Header from './header'
import SectionHobbies from './seccion'

const data = { info: 'Hola soy Melyna', hobbies: ['jugar', 'cantar', 'leer'] ,imagen: 'imagen.jpg'}

const App = () => {
  return (
    <div>
      <Header {...data}  />
      <SectionHobbies {...data} />
    </div>
  )
}

export default App
