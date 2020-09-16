import React from 'react'
import InputText from "../components/InputText"

<<<<<<< HEAD
const ModalCreatePlate = () => {
=======



const ModalCreateMeals = () => {
>>>>>>> 33c0cdea3ab29dbe0818af81c03beda1310ac5fc
    return (
        <div classeName="modal">
            <h1 className="Title">Novo Prato</h1>
            <label>URL da imagem</label>
            <InputText type="text" placeholder="Cole o link aqui" />
            <label>Nome do Prato</label>
            <InputText type="text" placeholder="Ex.: Hossomaki de Lula" />
            <label>Preço</label>
            <InputText type="price" placeholder="R$" />
            <label>Descrição do Prato</label>
            <InputText />
            <button onClick="#">Adicionar Prato</button>
            <i className={"fas fa-camera"}></i>
        </div>
    )

}

export default ModalCreateMeals
