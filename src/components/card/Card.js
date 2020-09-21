import React from "react"
import ButtonSwitch from '../Button/ButtonSwitch/ButtonSwicth'

function Card({ imgPlate, titleCard, price }) {
    return (
        <div className="card">
            <img className="imgPlates" src={imgPlate} alt="imagem de prato veggie"></img>
            <div className="foodDescription">
                <h1 className="titleCard">{titleCard}</h1>
                <p>Macarrão ao molho branco, fughi e cheiro verde das montanhas.</p>
                <h2 className="mealsPrice">R${price}</h2>
                <div className="mealsConf">
                    <button className="buttonConf" ><image src="DeleteIcon"></image> </button> <button className="buttonConf"></button>
                    <p>Disponível</p>
                    <ButtonSwitch></ButtonSwitch>
                </div>
            </div>
        </div>
    )
}

export default Card