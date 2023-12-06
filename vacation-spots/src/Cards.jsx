import { useState } from "react"
import vacationSpots from "./Data"
import Vaca from "./Vaca"

const summer = {
    backgroundColor: "red"
} 

const spring = {
    backgroundColor: "green"
}

const winter = {
    backgroundColor: "blue"
}

function Cards(){
    let card = vacationSpots.map(spots => {

        return (
            <Vaca spots = {spots} />
        )
    })

    return (
        <div className = "card-container">
            <span style = {winter}>{card}</span>
        </div>
    )
}

export default Cards