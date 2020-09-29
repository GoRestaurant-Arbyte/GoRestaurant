import React from "react"
import ButtonSwitch from '../Button/ButtonSwitch/ButtonSwitch'
import Icon from '@material-ui/core/Icon';

function Card({ meal }) {
    return (
        <div className="card">
            <img className="imgPlates" src={meal.image_url} alt="imagem de prato veggie"></img>
            <div className="foodDescription">
                <h1 className="titleCard">{meal.name}</h1>
                <p className="descriptionText">{meal.description}</p>
                <h2 className="mealsPrice">R${meal.price.toFixed(2)}</h2>
                <div className="mealsConf">
                    <button className="buttonConf" ><Icon>delete</Icon> </button> <button className="buttonConf"><Icon>edit</Icon></button>
                    <p>Disponível</p>
                    <ButtonSwitch></ButtonSwitch>
                </div>
            </div>
        </div>
    )
}

export default Card