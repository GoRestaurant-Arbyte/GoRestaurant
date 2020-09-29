import React, {useEffect} from "react"
import Header from "../components/Header/HeaderLogged"
import '../components/Header/header.css'
import Card from "../components/Card/CardLogged"
import '../components/Card/card.css'
import "../MealsScreen.css"
import {mealsGet} from "../api/meals"
import {connect} from "react-redux"
import {listMealsAction} from "../Redux/Actions/MealsAction"
import {isLogged} from '../api/user.js'



const AdminScreen = ({ history, dispatch, meals}) => {
    const listMeals = async () => {
        const meals = await mealsGet()
        dispatch(listMealsAction(meals))
    }

    useEffect(() => {
        if (isLogged()) {
            listMeals()
        } else {
            history.push('/login')
        }
    }, [])

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
    return {meals: store.meals}
}

export default connect(mapStoreToProps)(AdminScreen)