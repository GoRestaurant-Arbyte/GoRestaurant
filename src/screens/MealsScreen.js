import React from "react"
import Header from "../components/header/Header"
<<<<<<< HEAD


const MealsScreen = ({ history }) => {
    return (
        <div className="mealsContainer">
        <Header/>
        </div>
=======
import Card from "../components/card/Card"
import '../components/card/card.css'

const MealsScreen = ({ history }) => {
    return (
        <div>
        <Header></Header>
        <div className="sectionPlates">
        <Card titleCard="Ao Molho!"/> <Card titleCard="Veggie"/> <Card titleCard="A lá Camarón"/>
        </div>
        
       </div>
        
>>>>>>> 9c422ad60c0a3a50c7ffb69185e03117a18fd3fe
    );
};

export default MealsScreen;