import React from "react"
import Header from "../components/header/Header"
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
        
    );
};

export default MealsScreen;