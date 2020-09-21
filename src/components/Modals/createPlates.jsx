<<<<<<< HEAD:src/modals/createPlates.jsx
import React, {useState} from 'react'
import InputText from "../components/InputText"
=======
import React from 'react'
import InputText from "../InputText"
>>>>>>> 89340c6d286b449e411ec068653a444487cefbb7:src/components/Modals/createPlates.jsx

const ModalCreateMeals = () => {

    const [editMeal, setEditMeal] = useState=("")

    const EditMeal = ()=>{
        
    }


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
