import React from "react"
import Logo from '../../assets/img/logo.png'
import TitleRestaurant from '../../assets/img/goRestaurant.png'
import FoodType from '../../assets/img/foodType.png'
import { ButtonLogin, ButtonNewMeal } from "../Button/ButtonHeader/ButtonHeader"




function Header() {
    return (
        <div className="headerIndexPage">
            <div className="header">
                <img className="imgLogo" src={Logo} alt="Logo do Restaurante GoRestaurant"></img>
                <section className="brand">
                    <img src={TitleRestaurant}></img><br />
                    <img src={FoodType}></img>
                </section>
            </div>
            <ButtonNewMeal />
        </div >
    )

}

export default Header