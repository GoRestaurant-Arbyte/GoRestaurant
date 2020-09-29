import React, {useEffect} from "react"
import Header from "../components/Header/HeaderDefault"
import '../components/Header/Header.css'
import Card from "../components/Card/CardDefault"
import '../components/Card/card.css'
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