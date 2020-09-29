import React from "react"
import ButtonSwitch from '../Button/ButtonSwitch/ButtonSwitch'
import Icon from "../MealsComponent/Icons"
import {deleteMeals, mealsPatch} from "../../api/meals"
import {deleteMealsAction, updateMealsAction} from "../../Redux/Actions/MealsAction"
import {connect} from 'react-redux'

function Card({ meal, dispatch }) {
    const onMealDeleted = async (meal) => {
        console.log('me clicou')
        await deleteMeals(meal.id)
        dispatch(deleteMealsAction(meal))
    }
    const onMealUpdated = async (meal) => {
        console.log('me clicou')
        await mealsPatch(meal.id, meal)
        dispatch(updateMealsAction(meal))
    }


    return (
        <div className="card">
            <img className="imgPlates" src={meal.image_url} alt="imagem de prato veggie"></img>
            <div className="foodDescription">
                <h1 className="titleCard">{meal.name}</h1>
                <p className="descriptionText">{meal.description}</p>
                <h2 className="mealsPrice">R${meal.price.toFixed(2)}</h2>
                <div className="mealsConf">

                    <button className="buttonConf" onClick={()=> onMealDeleted(meal)}><Icon icon='trash'></Icon></button> <button className="buttonConf" onClick={()=>onMealUpdated(meal)}><Icon icon='edit'></Icon></button>
                    <ButtonSwitch></ButtonSwitch>
                </div>
            </div>
        </div>
    )
}

export default connect()(Card)






// <MealsList onMealUpdated={onMealUpdated} onMealDeleted={onMealDeleted} />