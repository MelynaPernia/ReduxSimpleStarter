import React from 'react'
const Header = (props) => {
   
return(
    <header>
        <p>{props.info}</p>
        <img src={props.img}/>
    </header>

)
}
export default Header