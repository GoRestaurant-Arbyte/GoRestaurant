import React from "react"
import ButtonSwitch from '../Button/ButtonSwitch/ButtonSwitch'
import { ButtonEditMeal } from '../Button/ButtonHeader/ButtonHeader'
import Icon from "../MealsComponent/Icons"
import { deleteMeals, mealsPatch } from "../../api/meals"
import { deleteMealsAction } from "../../Redux/Actions/MealsAction"
import { connect } from 'react-redux'

function Card({ meal, dispatch }) {
    const onMealDeleted = async (meal) => {
        console.log('me clicou')
        await deleteMeals(meal.id)
        dispatch(deleteMealsAction(meal))
    }
    
    return (
        <div className="card">
            <img className="imgPlates" src={meal.image_url} alt="imagem de prato veggie"></img>
            <div className="foodDescription">
                <h1 className="titleCard">{meal.name}</h1>
                <p className="descriptionText">{meal.description}</p>
                <h2 className="mealsPrice">R${meal.price.toFixed(2)}</h2>
                <div className="mealsConf">

                    <button className="buttonConf" onClick={() => onMealDeleted(meal)}><Icon icon='trash'></Icon></button> <ButtonEditMeal/>

                    <p>Disponível</p>
                    <ButtonSwitch></ButtonSwitch>
                </div>
            </div>
        </div>
    )
}

export default connect()(Card)






// <MealsList onMealUpdated={onMealUpdated} onMealDeleted={onMealDeleted} />