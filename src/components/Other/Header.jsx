import React,{useState} from 'react'

const Header = (props) => {

  const userData = props.data;

  // const [username,setUsername] = useState('')
  // if(!data){
  //   setUsername('Admin')
  // } 
  // else{
  //   setUsername(data.firstname)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser',"")

    props.changeUser("")

    // window.location.reload()
  }

  return (
    <div className="flex items-end justify-between">

    	{/*<h1 className="text-xl font-semibold">Hello <br/> <span className="text-3xl font-semibold">{props.firstname}</span></h1>*/}
      <h1 className="text-xl font-semibold">
        Hello <br />
        <span className="text-3xl font-semibold">
          {userData ? userData.firstname : "Admin"}
        </span>
      </h1>

    	<button onClick={logOutUser} className="bg-zinc-800 hover:bg-stone-700 rounded-sm text-white py-3 px-3">Log Out</button>

    </div>
  )
}

export default Header