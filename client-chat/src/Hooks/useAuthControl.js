import React, { useState } from 'react'
import axios from 'axios'


export const useAuthControl = () => {
  const [error,setError] = useState('')
  const Login = async (email,passowrd)=>{
    const loginData = {email,password}
    const users = await axios.post('http://locahost:3001/login',loginData);
    console.log(users)
  }
  const Register = async (firstName,lastName,email,password,phone)=>{
    const registerData = {firstName,lastName,email,password,phone}
    const users = await axios.post('http://locahost:3001/signup',registerData);
    console.log(users)
    
  }
  return {Login,Register}
}
