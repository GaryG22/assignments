import { useState } from "react"
import Pet from "./Pet"

function Friend (props){
    const petList = props.data.pets.map(info => {
        return (
            <Pet info = {info} />
        )
    })

    return (
        <div className = "friend-container">
            <div className = "name-age">
                <h1 className = "name">{props.data.name}</h1>
                <h1 className = "age">{props.data.name}</h1>
                <h1 className ="pet-header">Pets</h1>
            </div>
            {petList}
        </div>

    )
}

export default Friend
