import { useState } from "react"

import { useNavigate, Link } from "react-router-dom"

export default function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const navigate = useNavigate()

const handleLogin = async(e)=>{
e.preventDefault()
}

return(

<div className="flex justify-center items-center h-screen bg-black">

<form
onSubmit={handleLogin}
className="bg-gray-900 p-8 rounded-lg w-96 text-white">

<h1 className="text-3xl font-bold mb-6 text-center text-red-600">
QuickTV Login
</h1>

<input
type="email"
placeholder="Email"
className="w-full p-3 mb-4 rounded bg-gray-800"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required/>

<input
type="password"
placeholder="Password"
className="w-full p-3 mb-4 rounded bg-gray-800"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required/>

<button
type="submit"
className="w-full bg-red-600 py-3 rounded hover:bg-red-700">
Login
</button>

<p className="mt-4 text-center">
Don't have an account?
<Link to="/register" className="text-red-500 ml-2">
Register
</Link>
</p>

</form>

</div>

)

}
