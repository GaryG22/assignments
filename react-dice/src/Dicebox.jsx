import { useState } from "react"

function Dice(props){

    return (
        <div className = "dice">
            <h1 className = "dice-number">{props.number}</h1>
        </div>
    )
}

export default Dice