import { UserDataContext } from '../Context/UserDataContextProvider'
import {useContext}from 'react'

export const useUserData = () => {
    const context = useContext(UserDataContext)
  if(!context){
    throw Error('context is out of bound.')
  }
  return context
}
