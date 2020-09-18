import React from "react"
// import './header.css'
import Logo from '../../assets/img/logo.png'

function Header(){
    return (
<div className="headerIndexPage">
    <img className="imgLogo"src={Logo} alt="Logo do Restaurante GoRestaurant"></img>
    <h4>Comida Japonesa, sim!</h4>
    </div>
    )

}

export default Header