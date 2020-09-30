import React, {useState} from "react"
import './ModalNewMeal.css'
import {ButtonAddMeal} from'../Button/ButtonHeader/ButtonHeader'
import TextInput from "../TextInput"
import { mealsPost } from "../../api/meals"
import { connect } from "react-redux"
import { updateMealsAction } from "../../Redux/Actions/MealsAction"
import Meal from '../MealsComponent'


function ModalEditMeal(props) {
    const [image_url, setImage_url] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const editMeal = async () => {
        const meal = await mealsPost(image_url, name, price, description)
        props.dispatch(updateMealsAction(meal))
        return meal
    }

    const onMealUpdated = async (meal) => {
        console.log('me clicou')
        await mealsPatch(meal.id, meal)
        dispatch(updateMealsAction(meal))
    }

    return (
        <div id="modalBG" onClick={(e)=> {
            if(e.target.id === "modalBG"){
            props.onClose()}}} className="modal" >

            <div className="containerModal">

                <h1 className="titleMeal">Novo Prato</h1>
                <div className="inputUrlImg">
                    <label>Url da imagem</label>
                    <TextInput onChangeText={(text)=>setImage_url(text)}/>
                </div>

                <div className="inputNameMeals">
                    <label>Nome do prato</label>
                    <TextInput onChangeText={(text)=>setName(text)}/>
                </div>

                <div className="inputPriceMeals">
                    <label>Preço</label>
                    <TextInput onChangeText={(text)=>setPrice(text)}/>
                </div>

                <div className="inputDescriptionMeals">
                    <label>Descrição do Prato</label>
                    <TextInput onChangeText={(text)=>setDescription(text)}/>
                </div>
           <ButtonEditMeal onPress={() => onMealUpdated(meal)}>Editar Prato</ButtonEditMeal>
            </div>
        </div>

    )
}

export default connect() (ModalEditMeal)