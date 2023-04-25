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
import { useAuth } from './Hooks/useAuth'

function Routers() {
  const {user} = useAuth()
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element = {user ? <Home/> : <Login/>}></Route>
                <Route path= {user ? '/':'/login'} element = {!user ? <Login/>:<Home/>}></Route>
                <Route path={user ? '/':'/signup'} element = {!user ? <SignUp/>:<Home/>}></Route>
                <Route path='/channel' element = {user ? <Channel/>:<Login/>}></Route>
                <Route path='/group' element = {user ? <Group/> : <Login/>}></Route>
                <Route path='/private' element = {user ? <Private/>:<Login/>}></Route>
                <Route path='/public' element = {user ? <Public/>:<Login/>}></Route>
                <Route path='/video' element = {user ? <Video/>:<Login/>}></Route>
                <Route path='/signup' element = {!user ? <SignUp/> : <Home/>}></Route>
                <Route path = '/chat' element = {user ? <Chat/> : <Login/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Routers