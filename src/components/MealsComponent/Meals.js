import React, { useState } from 'react'
import Icons from './Icons'
import TextInput from '../TextInput'

const Meal = ({ meal, onMealUpdated, onMealDeleted }) => {
    const [completed, setCompleted] = useState(meal.completed)
    const [disabled, setDisabled] = useState(true)
    const [description, setDescription] = useState(meal.description)

    const onSavePressed = () => {
        onMealUpdated({ ...meal, description })
        setDisabled(true)
    }
    const onCheckChanged = (checked) => {
        onMealUpdated({ ...meal, completed: checked })
        setCompleted(checked)
    }

    return (
        <div>
            <input type="checkbox"
                checked={completed}
                onChange={(event) => onCheckChanged(event.target.checked)} />
            <TextInput
                value={description}
                onEnterPressed={onSavePressed}
                onChangeText={(text) => setDescription(text)}
                disabled={disabled} />
            {disabled ? (
                <Icons icon='edit' onPress={() => setDisabled(false)} />
            ) : (
                    <Icons icon='save' onPress={onSavePressed} />
                )}


            <Icons icon='trash' onPress={() => onMealDeleted(meal)} />

        </div>
    )
}

export default Meal