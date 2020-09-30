import React,{useState} from 'react'
import './ButtonHeader.css'
import ModalNewMeal from '../../Modals/ModalNewMeal'
import ModalEditMeal from '../../Modals/ModalEditMeal'


function ButtonNewMeal(){
    const [isModalVisible, setIsModalVisible] = useState(false)
    return(
        <>
        <div className="buttonDiv">
            <button className="button" onClick={()=>setIsModalVisible(true)}>Novo Prato</button>
            {isModalVisible ? <ModalNewMeal onClose={()=>setIsModalVisible(false)}/>: null}
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

function ButtonEditMeal(){
    const [isModalVisible, setIsModalVisible] = useState(false)
    return(
        <>
        <div className="buttonDiv">
            <button className="button" onClick={()=>setIsModalVisible(true)}><Icon icon='edit'></Icon></button>
            {isModalVisible ? <ModalEditMeal onClose={()=>setIsModalVisible(false)}/>: null}
        </div>
</>

    )
}

export {ButtonNewMeal, ButtonAddMeal, ButtonEditMeal}