import { useState } from 'react'
import Dice from "./Dicebox"
import './App.css'

function App() {

  //useState to set 5 numbers
  const [nums, setNums] = useState(() => [1, 2, 3, 4, 5])

  let randomNums = []

  for (let i = 0; i < 5; i++){
    randomNums.push(Math.floor(Math.random() *6 ) + 1)
  }

  function roll(){
    setNums(prevState => [...randomNums])
  }


  return (
    <div>
      
      <div className = "app">
        <Dice number = {nums[0]} />
        <Dice number = {nums[1]} />
        <Dice number = {nums[2]} />
        <Dice number = {nums[3]} />
        <Dice number = {nums[4]} />
      </div>
      <div>
        <button onClick = {roll}>Roll Dice</button>
      </div>
    </div>
  )
}

export default App
