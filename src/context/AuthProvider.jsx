// import React,{createContext,useState,useEffect} from 'react'
// import {getLocalStorage,setLocalStorage} from '../utils/localStorage'

// export const AuthContext = createContext()

// const AuthProvider  = ({children}) => {
// 	// localStorage.clear()

// 	const [userData,setUserData] = useState(null)

// 	useEffect(() => {
// 		setLocalStorage()
// 		const {employees,admin} = getLocalStorage()
// 		setUserData(employees)
// 	},[])

//   return (
//     <div>
//     <AuthContext.Provider value={[userData,setUserData]}>
//     	{children}
//     </AuthContext.Provider>
//     </div>
//   )
// }

// export default AuthProvider

import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)
    
    useEffect(() => {
        setLocalStorage()
        const { employees, admin } = getLocalStorage()
        setUserData(employees)
    }, [])
    
    // Custom setter that also updates localStorage
    const updateUserData = (newData) => {
        setUserData(newData)
        localStorage.setItem('employees', JSON.stringify(newData))
    }
    
    return (
        <div>
            <AuthContext.Provider value={[userData, updateUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider