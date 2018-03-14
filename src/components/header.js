import React from 'react'
const Header = (props) => {
   
return(
    <header>
        <p>{props.info}</p>
        <img src={props.imagen}/>
    </header>

)
}
export default Header