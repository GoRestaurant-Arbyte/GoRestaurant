import React from "react"
import Header from "../components/Header/Header"
import '../components/Header/Header.css'
import Card from "../components/Card/Card"
import '../components/Card/Card.css'
import imgPlate from '../assets/img/pratos.png'
import "../MealsScreen.css"

const MealsScreen = ({ history }) => {
    return (
        <div className="index">
        <Header></Header>
        <div className="sectionCardsPlates">
               <Card  imgPlate={imgPlate} titleCard="Ao Molho!" price="19,90"/> 
               <Card  imgPlate={imgPlate} titleCard="Ao Molho!" price="19,90"/>   
               <Card  imgPlate={imgPlate} titleCard="Ao Molho!" price="19,90"/> 
               <Card  imgPlate={imgPlate} titleCard="Ao Molho!" price="19,90"/> 
               <Card  imgPlate={imgPlate} titleCard="Ao Molho!" price="19,90"/>                 
               </div> 
               
       </div>
        
    );
};

export default MealsScreen;