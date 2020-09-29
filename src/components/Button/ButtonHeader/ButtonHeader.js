import React,{useState} from 'react'
import './ButtonHeader.css'
import ModalNewMeal from '../../Modals/ModalNewMeal'


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

export {ButtonNewMeal, ButtonAddMeal}