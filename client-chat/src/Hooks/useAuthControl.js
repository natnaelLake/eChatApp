import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./useAuth";
// import { response } from '../../../server-chat/app'

export const useAuthControl = () => {
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFrirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const { dispatch } = useAuth();
  const Login = async (email, password) => {
    const loginData = { email, password };
    try {
      const users = await axios.post("http://localhost:3001/login", loginData);
      // console.log(users);
      localStorage.setItem("user", JSON.stringify(users.data));
      dispatch({ type: "LOGIN", payload: users.data });
    } catch (error) {
      setEmailError(error.response.data.email);
      setPhoneError(error.response.data.phone);
    }
    
  };
  const Register = async (firstName, lastName, email, password, phone) => {
    const registerData = { firstName, lastName, email, password, phone };
    try{
      const users = await axios.post(
        "http://localhost:3001/signup",
        registerData
      );
      console.log(users)
      localStorage.setItem("user", JSON.stringify(users.data));
      dispatch({ type: "SIGNUP", payload: users.data });
    }catch(error){
      setFrirstNameError(error.response.data.firstName);
      setLastNameError(error.response.data.lastName);
      setEmailError(error.response.data.email);
      setPhoneError(error.response.data.phone);
      setPasswordError(error.response.data.password);
      setError(error.response.data.error)
    }
  };
  const errorData = {
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    phoneError,
    error,
  };
  return {
    Login,
    Register,
    errorData
  };
};
