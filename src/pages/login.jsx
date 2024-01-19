
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

function Login() {
    const [email, setEmail] = useState('')
    // const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async(e) => {
        e.preventDefault()

        try {
            const data = await axios.post('http://localhost:4000/user/login', {email, password})
            console.log(data);
            setEmail('')
            setPassword('')
            // setUsername('')
            navigate('/about')
            window.location.reload()
        } catch (error) {
            console.log(error.message);
        }

    }
    return (
      <div className="h-screen w-full flex items-center justify-center flex-col">
          <h2 className="text-2xl font-bold capitalize text-slate-900">Login</h2>
          <div className="w-[500px] shadow-lg p-6 ">
              <div className="flex flex-col mx-auto w-[90%] mb-4">
                  <label htmlFor="email" className="text-slate-800 capitalize font-bold">email</label>
                  <input type="email" placeholder="email@gmail.com" className=" p-3 border border-slate-800 rounded-md placeholder:text-slate-800 text-slate-800" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>
    
              <div className="flex flex-col mx-auto w-[90%] mb-4">
                  <label htmlFor="password" className="text-slate-800 capitalize font-bold">password</label>
                  <input type="password" placeholder="*******" className=" p-3 border border-slate-800 rounded-md placeholder:text-slate-800 text-slate-800" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              
              <button className="bg-slate-800 text-zinc-500 capitalize py-3 w-[90%] mx-auto flex rounded-[30px] text-center justify-center" onClick={handleLogin}>login</button>
          </div>
  
      </div>
    )
  }
  
  export default Login