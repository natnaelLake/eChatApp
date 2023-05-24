import { useState } from "react";
import axios from "axios";
import { useAuth } from "./useAuth";
import { useUserData } from "./useUserData";
// import { response } from '../../../server-chat/app'

export const useAuthControl = () => {
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFrirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const { dispatch, user } = useAuth();
  const { dispatch: dispatchData } = useUserData();
  const Login = async (email, password) => {
    const loginData = { email, password };
    try {
      const users = await axios.post("https://web-chat-app-backend-service.onrender.com/login", loginData);
      const { data } = await axios.get("https://web-chat-app-backend-service.onrender.com/allUsers", {
        headers: {
          Authorization: `Bearer ${users.token}`,
        },
      });
      localStorage.setItem("user", JSON.stringify(users.data));
      dispatch({ type: "LOGIN", payload: users.data });
      // localStorage.setItem("allUsers", JSON.stringify(data));
      // dispatchData({ type: "GET_USER", payload: data });
    } catch (error) {
      setEmailError(error.response.data.email);
      setPasswordError(error.response.data.password);
    }
  };
  const Register = async (firstName, lastName, email, password, phone) => {
    const registerData = { firstName, lastName, email, password, phone };
    try {
      const users = await axios.post(
        "https://web-chat-app-backend-service.onrender.com/signup",
        registerData
      );
      localStorage.setItem("user", JSON.stringify(users.data));
      dispatch({ type: "SIGNUP", payload: users.data });
    } catch (error) {
      setFrirstNameError(error.response.data.firstName);
      setLastNameError(error.response.data.lastName);
      setEmailError(error.response.data.email);
      setPhoneError(error.response.data.phone);
      setPasswordError(error.response.data.password);
      setError(error.response.data.error);
    }
  };
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };
  const getAllUser = async () => {
    // const users = await axios.get('http://localhost:3001/allUsers',{
    //   headers:{
    //     'Authorization':`Bearer ${user.token}`
    //   }
    // })
    // localStorage.setItem("allUser", JSON.stringify(users));
    // dispatch({ type: "GET_USER", payload: users });
  };
  const createChat = async (userId) => {
    const userIdValue = {
      userId: userId,
    };
    const { data } = await axios.post(
      "https://web-chat-app-backend-service.onrender.com/createChat",
      userIdValue,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    console.log(data)
  };
  const errorData = {
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    phoneError,
    error,
  };
  const createGroupChat = async (users,name)=>{
      const groupData = {users,name}
      const {data} = await axios.post('https://web-chat-app-backend-service.onrender.com/createGroup',groupData,{
        headers:{
          'Authorization':`Bearer ${user.token}`
        }
      })
  }
  const updateGroup = async (chatId,chatName)=>{
    const editGroupData = {chatId,chatName}
    const {data} = axios.put('https://web-chat-app-backend-service.onrender.com/editGroup',editGroupData,{
      headers:{
        'Authorization':`Bearer ${user.token}`
      }
    })
  }
  const addToGroup = async (chatId,userId)=>{
    const addData = {
      chatId,
      userId
    }
    const {data} = axios.put('https://web-chat-app-backend-service.onrender.com/removeFromGroup',addData,{
      headers:{
        'Authorization':`Bearer ${user.token}`
      }
    })
  }
  const removeFromGroup = async (chatId,userId)=>{
    const removeData = {
      chatId,
      userId
    }
    const {data} = axios.put('https://web-chat-app-backend-service.onrender.com/removeFromGroup',removeData,{
      headers:{
        'Authorization':`Bearer ${user.token}`
      }
    })
  }
  return {
    Login,
    Register,
    errorData,
    getAllUser,
    logout,
    createChat,
    createGroupChat,
    updateGroup
  };
};