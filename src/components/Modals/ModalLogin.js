import React, {useState} from "react"
import './ModalNewMeal.css'
import Button from "../Button"
import {login} from "../../api/user"


function ModalLogin(props) {
    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")
    const doLogin = async ()=>{
        try{
            if (!cpf && !password){
                return alert ("dados invalidos")
            }
        const userData = await login (cpf, password)

        localStorage.setItem('userData', JSON.stringify(userData))

        props.onClose()

        
        }catch (e) {
            alert ('Deu Ruim', e)
        }
    }

    return (
        <div id="modalBG" onClick={(e)=> {
            if(e.target.id === "modalBG"){
            props.onClose()}}} className="modal" >
            <div className="containerModal">

                <h1 className="titleMeal">Login</h1>
                <div className="inputUrlImg">
                    <label>CPF</label>
                    <input type="text" onChange={(e)=> setCpf(e.target.value)}/>
                </div>

                <div className="inputNameMeals">
                    <label>Senha</label>
                    <input type="text" onChange={(e)=> setPassword(e.target.value)}/>
                </div>
            </div>
           <Button onPress={doLogin}>Login</Button>
            </div>

    )
}

export default ModalLogin