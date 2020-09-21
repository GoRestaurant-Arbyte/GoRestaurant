import React from "react"
import './ModalNewMeal.css'
import ButtonHeader from'../Button/ButtonHeader/ButtonHeader'
function ModalNewMeal() {
    return (
        <div className="modal">
            <div className="containerModal">

                <h1 className="titleMeal">Novo Prato</h1>
                <div className="inputUrlImg">
                    <label>Url da imagem</label>
                    <input ></input>
                </div>

                <div className="inputNameMeals">
                    <label>Nome do prato</label>
                    <input ></input>
                </div>

                <div className="inputPriceMeals">
                    <label>Preço</label>
                    <input ></input>
                </div>

                <div className="inputDescriptionMeals">
                    <label>Descrição do Prato</label>
                    <input></input>
                </div>
           <ButtonHeader></ButtonHeader>
            </div>
        </div>

    )
}

export default ModalNewMeal