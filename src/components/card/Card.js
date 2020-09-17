import React from "react"
import './card.css'

function Card(props) {
    return (

        <div className="card">
            <div className="cardImage">
                {/* <img clasName="imgPrato" src={props.image} ></img> */}
            </div>
            <div>
    <h1 className="titleCard">{props.titleCard}</h1>
    </div>
        </div>


    )

}

export default Card