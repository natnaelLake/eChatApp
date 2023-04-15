import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './Pages/AuthPage/Login'
import SignUp from './Pages/AuthPage/SignUp'
import Home from './MainPages/Home'
import Channel from './MainPages/HomePages/Channel'


function Routers() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element = {<Home/>}></Route>
                <Route path='/login' element = {<Login/>}></Route>
                <Route path='/signup' element = {<SignUp/>}></Route>
                <Route path='/channel' element = {<Channel/>}></Route>
                <Route path='/signup' element = {<SignUp/>}></Route>
                <Route path='/signup' element = {<SignUp/>}></Route>
                <Route path='/signup' element = {<SignUp/>}></Route>

            </Routes>
        </Router>
    </div>
  )
}

export default Routers