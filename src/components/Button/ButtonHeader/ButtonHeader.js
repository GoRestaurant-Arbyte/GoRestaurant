import React,{useState} from 'react'
import './ButtonHeader.css'
import ModalNewMeal from '../../Modals/ModalNewMeal'
import ModalLogin from '../../Modals/ModalLogin'

function ButtonNewMeal(){
    const [isModalVisible, setIsModalVisible] = useState(false)
    return(
        <>
        <div className="buttonDiv">
            <button className="button" onClick={()=>setIsModalVisible(true)}>Novo Prato<i>+</i></button>
            {isModalVisible ? <ModalNewMeal onClose={()=>setIsModalVisible(false)}/>: null}
        </div>
</>

    )
}

function ButtonLogin(){
    const [isModalVisible, setIsModalVisible] = useState(false)
    return(
        <>
        <div className="buttonDiv">
            <button className="button" onClick={()=>setIsModalVisible(true)}>Login</button>
            {isModalVisible ? <ModalLogin onClose={()=>setIsModalVisible(false)}/>: null}
        </div>
</>

    )
}

function ButtonAddMeal({onPress, children,img}){
    return(
    <div className="buttonDiv">
        <button className="button" onClick={onPress}>
            {children}{img}
        </button>
    </div>
    )
}

export {ButtonNewMeal, ButtonLogin, ButtonAddMeal}