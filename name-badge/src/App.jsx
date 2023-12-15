import { useState } from 'react'
import NameBadge from "./NameBadge"
import './App.css'

function App() {

  const [formData, setFormData] = useState(() =>({
    firstName: "",
    lastName: "",
    email: "",
    birthPlace: "",
    phone: "",
    favoriteFood: "",
    descriptionBox: "",
  }))

  const [nameBadges, setNameBadges] = useState(() => [])

  function formHandler(event){
    const {name, value} = event.target 
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  } 

  function handleSubmit(event){
    event.preventDefault()
    setNameBadges(prevState => ([
      ...prevState,
      formData
    ]))
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      birthPlace: "",
      phone: "",
      favoriteFood: "",
      descriptionBox: "",
    })
  }

  const nameList = nameBadges.map(info => (
    <NameBadge 
    key = {info.email}
    info = {info}
    />
  ))

  return (
    <div className = "form-box">
      <form className = "form" onSubmit={handleSubmit}>
        <input className = "input"
        placeholder='First Name'
        name = "firstName"
        value={formData.firstName}
        type = "text"
        onChange = {formHandler}
        />

        <input className = "input"
        placeholder='Last Name'
        name = "lastName"
        value={formData.lastName}
        type = "text"
        onChange = {formHandler}
        />

        <input className = "input"
        placeholder='Email'
        name = "email"
        value={formData.email}
        type = "text"
        onChange = {formHandler}
        />

        <input className = "input"
        placeholder='Place of Birth'
        name = "birthPlace"
        value={formData.birthPlace}
        type = "text"
        onChange = {formHandler}
        />

        <input className = "input"
        placeholder='Phone'
        name = "phone"
        value={formData.phone}
        type = "phone"
        onChange = {formHandler}
        />

        <input className = "input"
        placeholder='Favorite Food'
        name = "favoriteFood"
        value={formData.favoriteFood}
        type = "text"
        onChange = {formHandler}
        />

        <textarea className = "input" rows = "8"
        placeholder='Tell us about yourself'
        name = "descriptionBox"
        value={formData.descriptionBox}
        onChange = {formHandler}
        />

        <button className = "submitBtn">Submit</button>
      </form>
      {nameList}
    </div>
  )
}

export default App
