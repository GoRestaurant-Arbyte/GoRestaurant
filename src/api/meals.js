import Axios from "axios"

const URLMeals = 'https://go-restaurant-arbyte.herokuapp.com'

async function MealsPost(){
    const response = await Axios.post(`${URLMeals}/meals`, {

    })
    return response.data
}

async function MealsPatch(){
    const response = await Axios.patch(`${URLMeals}/meals/:id`, {

    })
    return response.data
}


export {MealsPost, MealsPatch}