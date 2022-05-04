import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const Login = () => {

    let navigate = useNavigate();
    const [user, setUser] = useState({name:'admin', pass:'admin'})

    function handleSubmit(e){
        e.preventDefault();
        const nameInput = e.target.name.value;
        const passwordInput = e.target.password.value;
        console.log(nameInput, passwordInput)

        if(nameInput === user.name && passwordInput === user.pass){
            navigate('/', {replace:true})
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-md">
            <h3 className="text-2xl font-bold text-center">Login to your account</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className="mt-4">
                    <div>
                        <label className="block" htmlFor="email">Email</label>
                                <input type="text" name='name' placeholder="Email"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required/>
                    </div>
                    <div className="mt-4">
                        <label className="block">Password</label>
                                <input type="password" name='password' placeholder="Password"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required/>
                    </div>
                    <div className="flex items-baseline justify-between">
                        <button type='submit' className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
