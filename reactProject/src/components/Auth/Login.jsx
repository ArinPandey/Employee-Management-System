import React,{useState} from 'react'


const Login = ({handleLogin}) => {

  // console.log(handleLogin)

  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email,password)

    console.log("Hello guys, form submitted successfully")

    setEmail("")
    setPassword("")
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">

    	<div className="border-2 border-emerald-500 p-20 rounded-xl flex flex-col">

        <h2 className="self-center mb-10 font-extrabold">Login Page</h2>

    		<form className="flex flex-col justify-center items-center" 
        onSubmit={(e)=>{
            submitHandler(e)
            console.log("Email is",email)
            console.log("Password is",password)

          }
        }>

    			<input value={email} onChange={(e) => { setEmail(e.target.value)}}
           required type="email" placeholder="Enter your email" className="border-2 border-emerald-500 text-white outline-none bg-transparent rounded-full py-4 px-5"/>

    			<input value={password} onChange={(e) => { setPassword(e.target.value)}}
          required type="password" placeholder="Enter password" className="border-2 border-emerald-500 text-white outline-none bg-transparent rounded-full py-4 px-5 mt-3"/>

    			<button className="border-2 border-emerald-500 text-white outline-none bg-emerald-600 rounded-full py-4 px-4 mt-5">log in</button>

    		</form>

    	</div>

    </div>

  )
}

export default Login