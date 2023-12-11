
import React from 'react'
import ReactDOM from 'react-dom/client'
import FriendList from "./FriendList"
import "./index.css"

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

root.render(<FriendList />)