import React, {useEffect} from "react"
import Header from "../components/header/Header"
import '../components/header/header.css'
import Card from "../components/card/Card"
import '../components/card/card.css'
import imgPlate from '../assets/img/pratos.png'
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
<<<<<<< HEAD
               <Card  imgPlate={imgPlate} titleCard="Ao Molho!" price="19,90"/> 
               <Card  imgPlate={imgPlate} titleCard="Ao Molho!" price="19,90"/>   
               <Card  imgPlate={imgPlate} titleCard="Ao Molho!" price="19,90"/> 
               <Card  imgPlate={imgPlate} titleCard="Ao Molho!" price="19,90"/> 
               <Card  imgPlate={imgPlate} titleCard="Ao Molho!" price="19,90"/>                 
               </div> 
=======
            {meals.map(meal=> <Card meal={meal}/>)}                     
        </div> 
>>>>>>> 5788f53679ac6d8b90a91eafeb2b58571aa22fe5
               
       </div>
        
    );
};

function mapStoreToProps(store) {
    return {meals: store.meals}
}

export default connect(mapStoreToProps)(MealsScreen)