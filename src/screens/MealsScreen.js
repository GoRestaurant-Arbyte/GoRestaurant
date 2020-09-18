import React from "react"
import Header from "../components/header/Header"
import Card from "../components/card/Card"
import '../components/card/card.css'
import '../components/header/header.css'
import imgPlate from '../assets/img/pratos.png'
import "../MealsScreen.css"


const MealsScreen = ({ history }) => {
    return (
        <div>
        <Header></Header>
        <div className="sectionCardsPlates">
               <Card  imgPlate={imgPlate} titleCard="Ao Molho!"/> 
               <Card  imgPlate={imgPlate} titleCard="Ao Molho!"/> 
               <Card  imgPlate={imgPlate} titleCard="Ao Molho!"/> 
               
                
               </div> 
       </div>
        
    );
};

export default MealsScreen;