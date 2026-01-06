import React,{useState} from 'react'
import Aurora from '../Effects/Aurora'; 



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
      <div className="flex justify-center items-center h-screen w-screen"> {/* Outer Wrapper */}

    <div className="relative flex justify-center items-center h-screen w-screen overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Login Form Box */}
      <div className="border-2 border-emerald-500 p-20 rounded-xl flex flex-col backdrop-blur-md bg-white/10">
        <h2 className="self-center mb-10 font-extrabold text-white">Login Page</h2>

        <form className="flex flex-col justify-center items-center"
          onSubmit={(e) => {
            submitHandler(e);
            console.log("Email is", email);
            console.log("Password is", password);
          }}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter your email"
            className="border-2 border-emerald-500 text-white outline-none bg-transparent rounded-full py-4 px-5"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter password"
            className="border-2 border-emerald-500 text-white outline-none bg-transparent rounded-full py-4 px-5 mt-3"
          />

          <button className="border-2 border-emerald-500 text-white outline-none bg-emerald-600 rounded-full py-4 px-4 mt-5 cursor-pointer">
            log in
          </button>
        </form>
      </div>
    </div>

  </div>
  )
}

export default Login