import React, {useEffect} from "react"
import Header from "../components/header/HeaderDefault"
import '../components/header/header.css'
import Card from "../components/card/CardDefault"
import '../components/card/card.css'
import "../MealsScreen.css"
import {mealsGet} from "../api/meals"
import {connect} from "react-redux"
import {listMealsAction} from "../Redux/Actions/MealsAction"

const MealsScreen = ({ history, dispatch, meals}) => {
    const listMeals = async () => {
        const meals = await mealsGet()
        dispatch(listMealsAction(meals))
    }

    useEffect(()=> {listMeals()}, [])

    return (
        <div className="index">
        <Header></Header>
        <div className="sectionCardsPlates">
            {meals.map(meal=> <Card meal={meal}/>)}                     
        </div> 
       </div>
    );
};
function mapStoreToProps(store) {
    console.log("aqui",store)
    return {meals: store.meals}
}

export default connect(mapStoreToProps)(MealsScreen)