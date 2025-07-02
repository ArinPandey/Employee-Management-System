import { useState,useEffect,useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import {AuthContext} from './context/AuthProvider'

import './App.css'



function App() {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // },)

  const [userData,setUserData] = useContext(AuthContext)

  const [loggedInUserData,setLoggedInUserData] = useState(null); 
  // console.log(authData.employees)

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")

  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[authData]);

  const [user,setUser] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      if(userData.role === 'employees'){
      setLoggedInUserData(userData.data)
    }
      console.log("User logged in hai")
    }
  },[]);

  const handleLogin = (email,password) => {
    if(email === "admin@me.com" && password === "123"){
      // console.log("This is admin")
      setUser('admin')
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
    }
    // else if(email == 'user@me.com' && password == '123')
    else if(userData){
      // console.log("This is user") 
      const employee = userData.find((e) => e.email === email && e.password === password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:employee}))
      }
    }
    else{
      alert("Invalid credentials")
    }
  }


  return (
    <>
      
      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == "employee" ?  <EmployeeDashboard changeUser={setUser}  data = {loggedInUserData} /> : null)}

    </>
  )
}

export default App


