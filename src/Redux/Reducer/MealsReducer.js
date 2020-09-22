const replaceMeal = (meal, meals, id) => {
    const indexOf = meals.findIndex((currentMeal) => currentMeal.id === id)
    const args = [indexOf, 1]
    if (meal) {
        args.push(meal)
    }
    meals.splice(...args)

    
    return [...meals]
}

const initialState = { meals: [] }

const handleMeal = (store = initialState, action) => {
    switch (action.type) {
        case "LIST_MEALS":
            return { ...store, meals: action.meals }
        case "CREATE_MEALS":
            return { ...store, meals: [...store.meals, action.meal] }
        case "UPDATE_MEALS":
            return { ...store, meals: replaceTask(store.meals, action.meal.id, action.meal) }
        case "DELETE_MEALS":
            return { ...store, meals: replaceTask(store.meals, action.meal.id) }
        default:
            return store
    }
}

export default handleMeal