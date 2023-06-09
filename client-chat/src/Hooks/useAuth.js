import { userContext } from "../Context/UserContextProvider";
import {useContext}from 'react'

export const useAuth = () => {
    const context = useContext(userContext)
  if(!context){
    throw Error('context is out of bound.')
  }
  return context
}

