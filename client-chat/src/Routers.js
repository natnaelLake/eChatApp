import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './Pages/AuthPage/Login'
import SignUp from './Pages/AuthPage/SignUp'
import Home from './MainPages/Home'
import Channel from './MainPages/HomePages/Channel'
import Chat from './Chats/Chat'
import Group from './MainPages/HomePages/Group'
import Video from './MainPages/HomePages/Video'
import Public from './MainPages/HomePages/Public'
import Private from './MainPages/HomePages/Private'


function Routers() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element = {<Home/>}></Route>
                <Route path='/login' element = {<Login/>}></Route>
                <Route path='/signup' element = {<SignUp/>}></Route>
                <Route path='/channel' element = {<Channel/>}></Route>
                <Route path='/group' element = {<Group/>}></Route>
                <Route path='/private' element = {<Private/>}></Route>
                <Route path='/public' element = {<Public/>}></Route>
                <Route path='/video' element = {<Video/>}></Route>

                <Route path='/signup' element = {<SignUp/>}></Route>
                <Route path='/signup' element = {<SignUp/>}></Route>
                <Route path='/signup' element = {<SignUp/>}></Route>
                <Route path = '/chat' element = {<Chat/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Routers