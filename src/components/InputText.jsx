import React from "react"

const InputText = ({type, placeholder, onEnterPressed, onChangeText})=>{
    return (
        <input
            className='inputText'
            type={type}
            placeholder={placeholder}
            onChange={(e) => onChangeText(e.target.value)}
            onKeyPress={(event) => onEnterPressed && event.key === "Enter" && onEnterPressed(event.target.value)}
        />
    )
}

export default InputText