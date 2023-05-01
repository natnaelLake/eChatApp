import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Chat from "./Chats/Chat";
import { useAuth } from "./Hooks/useAuth";
import Home from "./MainPages/Home";
import Channel from "./MainPages/HomePages/Channel";
import Group from "./MainPages/HomePages/Group";
import Private from "./MainPages/HomePages/Private";
import Public from "./MainPages/HomePages/Public";
import ManageProfile from "./MainPages/HomePages/Settings/ManageProfile";
import Video from "./MainPages/HomePages/Video";
import Login from "./Pages/AuthPage/Login";
import SignUp from "./Pages/AuthPage/SignUp";

function Routers() {
  const { user } = useAuth();
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Login />} />
          <Route path="/login" element={!user ? <Login /> : <Home />} />
          <Route
            path={user ? "/" : "/signup"}
            element={!user ? <SignUp /> : <Home />}
          />
          <Route
            path={user ? "/channel" : "/login"}
            element={user ? <Channel /> : <Login />}
          />
          <Route
            path={user ? "/group" : "/login"}
            element={user ? <Group /> : <Login />}
          />
          <Route
            path={user ? "/private" : "/login"}
            element={user ? <Private /> : <Login />}
          />
          <Route
            path={user ? "/public" : "/login"}
            element={user ? <Public /> : <Login />}
          />
          <Route
            path={user ? "/video" : "/login"}
            element={user ? <Video /> : <Login />}
          />
          <Route
            path={user ? "/chat" : "/login"}
            element={user ? <Chat /> : <Login />}
          />
          <Route
            path="/settings"
            element={user ? <ManageProfile /> : <Login />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default Routers;