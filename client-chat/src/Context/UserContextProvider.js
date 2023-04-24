import React, { createContext, useContext, useEffect, useReducer, useState } from "react";

export const userContext = createContext();

const authReducer = (state,action)=>{
  switch(action.type){
    case 'LOGIN':
      return {
        user:action.payload
      }
      case 'LOGOUT':
      return {
        user:null
      }
      default:
      return state
  }
}
export const UserContextProvider = ({ children }) => {
  const [state,dispatch] = useReducer(authReducer,{
    user:null
  })
  useEffect(() => {}, []);
  return (
    <div>
      <userContext.Provider value={{...state, dispatch}}>
        {children}
      </userContext.Provider>
    </div>
  );
};
