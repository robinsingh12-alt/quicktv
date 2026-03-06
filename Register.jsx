import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

export default function Register(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const handleRegister = async(e)=>{
e.preventDefault()
}

return(

<div className="flex justify-center items-center h-screen bg-black">

<form
onSubmit={handleRegister}
className="bg-gray-900 p-8 rounded-lg w-96 text-white"
>

<h1 className="text-3xl font-bold mb-6 text-center text-red-600">
QuickTV Register
</h1>

<input
type="text"
placeholder="Name"
className="w-full p-3 mb-4 rounded bg-gray-800"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<input
type="email"
placeholder="Email"
className="w-full p-3 mb-4 rounded bg-gray-800"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
className="w-full p-3 mb-4 rounded bg-gray-800"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button
type="submit"
className="w-full bg-red-600 py-3 rounded hover:bg-red-700"
>
Register
</button>

<p className="mt-4 text-center">
Already have an account?
<Link to="/login" className="text-red-500 ml-2">
Login
</Link>
</p>

</form>

</div>

)

}
