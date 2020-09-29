import React from "react"
import ButtonSwitch from '../Button/ButtonSwitch/ButtonSwitch'

function Card({ meal }) {
    return (
        <div className="card">
            <img className="imgPlates" src={meal.image_url} alt="imagem de prato veggie"></img>
            <div className="foodDescription">
                <h1 className="titleCard">{meal.name}</h1>
                <p className="descriptionText">{meal.description}</p>
                <h2 className="mealsPrice">R${meal.price.toFixed(2)}</h2>
                <div className="mealsConf">
                    <p>Disponível</p>
                    <ButtonSwitch></ButtonSwitch>
                </div>
            </div>
        </div>
    )
}

export default Card