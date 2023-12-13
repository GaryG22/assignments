import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      <h1>colors</h1>
    </div>
  )
}

export default App

//const [color, setColor] = useState("pink")
//setColor("blue")


//const [color, setColor] = useState("pink")

/*setColor( prevColor => {
  if (prevColor === "pink") {
    prevColor = "blue"
  } if (prevColor === "blue"){
    prevColor = "pink"
  }
})*/



/*const [people, setPeople] = useState([
	{
		firstName: "John",
		lastName: "Smith"
	},
  
])

setPeople(prevPeople => {
	return [
     ...prevPeople, 
     {
        firstName: "Aaron", 
        lastName: "Rodgers"
     }
  ]
})*/

/*const [colors, setColors] = setState(["pink", "blue"])

// explicit return 
setColors(prevColors => {
	return [...prevColors, "green"]
})

// implicit return
setColors(prevColors => [...prevColors, "green"])*/


/*const [person, setPerson] = useState({
  firstName: "John",
  lastName: "Smith"
})

setPerson(prevState => ({
  ...prevState,
  age: 30
}))*/