import { useState } from "react"
import Friend from "./Friend"

function Pet (props) {
    return (
        <div className = "pet-container">
            <div className = "pet-name">
                <h1 className = "pet">Pet Name</h1>
                <h1>{props.info.name}</h1>
            </div>
            <div className ="pet-breed">
                <h1 className ="pet">Pet Breed</h1>
                <h1>{props.info.breed}</h1>
            </div>
        </div>
    ) 
}

export default Pet