import React from "react"



function Card({ imgPlate, titleCard }) {
    return (
        <div className="card">
            <img className="imgPlates" src={imgPlate} alt="imagem de prato veggie"></img>
            <div className="foodDescription">
                <h1 className="titleCard">{titleCard}</h1>
                <p>Macarrão ao molho branco, fughi e cheiro verde das montanhas.</p>
            </div>
        </div>
    )
}

export default Card