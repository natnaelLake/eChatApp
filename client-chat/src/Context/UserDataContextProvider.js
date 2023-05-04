import React, { Children, useEffect, useReducer } from 'react'
import { createContext } from 'react'

export const UserDataContext = createContext()
const dataReducer = (state,action)=>{
  switch(action.type){
    case 'SEARCH':
      return{
        userData:action.payload
      }
      case 'GET_USER':
      return{
        userData:action.payload
      }
    default: return state
  }
}
export const UserDataContextProvider = ({children}) => {
  const [state,dispatch] = useReducer(dataReducer,{
    userData:[]
  })
  console.log('user Data is:',state.userData)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("allUsers"));
    // console.log(user);
    if (user) {
      dispatch({ type: "GET_USER", payload: user });
    }
  }, []);
  return (
    <UserDataContext.Provider value={{...state,dispatch}}>
      {children}
    </UserDataContext.Provider>
  )
}

