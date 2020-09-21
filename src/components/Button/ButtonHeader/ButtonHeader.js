import React,{useState} from 'react'
import './ButtonHeader.css'
import ModalNewMeal from '../../Modals/ModalNewMeal'

function ButtonHeader(){
    const [isModalVisible, setIsModalVisible] = useState(false)
    return(
        <div>
            <button className="buttonMealsNew" onClick={()=>setIsModalVisible(true)}>Novo Prato<button className="buttonAdd">+</button></button>
            {isModalVisible ? <ModalNewMeal />: null}
        </div>


    )
}


export default ButtonHeader