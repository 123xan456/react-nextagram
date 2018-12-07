import React from 'react'
import { Route, Link } from "react-router-dom"
import './App.css'
import HomePage from './pages/HomePage'
import UserProfilePage from './pages/UserProfilePage'

class App extends React.Component {
  state = {
    profilelinks:[]
  }
  render(){
    return(
  <div>
        {/* We temporarily hardcode this to user id 1  */}
        <Link to="/">Home</Link>
        <Link to="/user/1" id="profilepage">My Profile</Link>
        <Route exact path="/" component={HomePage} ></Route>
        <Route path="/user/:id" component={UserProfilePage} ></Route>
        
        <br/>
    <HomePage/>

  </div>
  )
}
}
export default App
