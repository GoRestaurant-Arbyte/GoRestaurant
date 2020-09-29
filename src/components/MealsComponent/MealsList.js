import React from 'react'
import Meal from './Meals'
import { connect } from "react-redux"

const MealsList = ({ meals, onMealDeleted, onMealUpdated }) => {
    return (
        <>

            {meals
                .sort((meal1, meal2) => meal1.completed - meal2.completed)
                .map((meal) => (
                    <Meal
                        meal={meal}
                        onMealDeleted={onMealDeleted}
                        onMealUpdated={onMealUpdated}
                        key={meal.id} />))}

        </>
    )
}

const mapStoreToProps = (store) => {
    return {
        meals: store.meals
    }
}

export default connect(mapStoreToProps)(MealsList)