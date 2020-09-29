import Axios from "axios"

const URLMeals = 'https://go-restaurant-arbyte.herokuapp.com'



function getToken() {
    const userData = localStorage.getItem("userData")
    const { token } = JSON.parse(userData)
    return token
}


async function mealsPost(image_url, name, price, description){
    const response = await Axios.post(`${URLMeals}/meals`, {
        image_url,
        name,
        price,
        description,
    }, {headers: {authorization: `Bearer ${getToken()}`}})
    return response.data
}

async function mealsPatch(id, meal){
    const response = await Axios.patch(`${URLMeals}/meals/${id}`, {

    }, {headers: {authorization: `Bearer ${getToken()}`}})
    return response.data
}

async function mealsGet(){
    const response = await Axios.get(`${URLMeals}/meals`)
    return response.data
}

async function deleteMeals(id) {
    await Axios.delete(`${URLMeals}/meals/${id}`, { headers: { authorization: `Bearer ${getToken()}` } })
}

export {mealsPost, mealsPatch, mealsGet, deleteMeals}