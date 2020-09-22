import {createStore} from "redux"
import handleMeals from "../Reducer/mealsRedux"

const store = createStore(handleMeals)

export default store