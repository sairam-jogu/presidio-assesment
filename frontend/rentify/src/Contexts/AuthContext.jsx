/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {createContext,useReducer} from 'react'
import React from 'react';

export const Auth = createContext();

export const authReducer = (state,action) => {
    switch(action.type){
        case 'LOGIN':
            return {user:action.payload.token}
        case 'LOGOUT':
            return {user:null}
        default:
            return state;
        
    }
}

export const AuthContext = ({children}) => {
    const [state,dispatch] = useReducer(authReducer,{
        user: localStorage.getItem("token") || null,
    })
    return (
        <Auth.Provider value={{...state,dispatch}}>
            {children}
        </Auth.Provider>
    )
}