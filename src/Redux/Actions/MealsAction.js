export function listMealsAction(meals) {
    return {
        type: "LIST_MEALS",
        meals
    }
}

export function createMealsAction(meal) {
    return {
        type: "CREATE_MEALS",
        meal
    }
}

export function deleteMealsAction(meal) {
    return {
        type: "DELETE_MEALS",
        meal
    }
}

export function updateMealsAction(meal) {
    return {
        type: "UPDATE_MEALS",
        meal
    }

}