import Axios from "axios"

const URLMeals = 'url da api'

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