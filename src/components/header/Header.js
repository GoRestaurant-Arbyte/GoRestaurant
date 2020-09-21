import React from "react"
import Logo from '../../assets/img/logo.png'
import ButtonHeader from "../Button/ButtonHeader/ButtonHeader"

function Header() {
    return (
        <div>
        <div className="headerIndexPage">
            <img className="imgLogo" src={Logo} alt="Logo do Restaurante GoRestaurant"></img>
            <section className="brand"> 
            <h1>GoRestaurant</h1>
            <h4>Comida Japonesa, sim!</h4>
            </section>
           
        </div>
        <ButtonHeader></ButtonHeader>
        </div>
    )

}

export default Header