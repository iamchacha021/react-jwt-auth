import React from "react";
import {useContext, useState} from 'react'
import {AuthContext} from './AuthContext'
import { Link } from "react-router-dom";

function Signup () {

    const {register} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fisrt_name, setFirstName]= useState('')
    const [last_name, setLastName]= useState('')
    const [username , setUserName] = useState("");
    const [is_admin, setIsAdmin] = useState(false)
    

    const handleSubmit = (e) => {
        e.preventDefault()
        register(fisrt_name, last_name, email, username, is_admin, password)

    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: '#F3F4F6' }}>
        <form onSubmit={handleSubmit} className="flex flex-col bg-white p-10 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold  text-center">Sign Up</h1>
            <p className="text-gray-500 mb-3 text-center">Create an account</p>
            <div className="mb-4">
                <label htmlFor="first_name" className="block mb-1 font-medium text-gray-600">First Name</label>
                <input
                    value={fisrt_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border-2 rounded-md border-gray-300 py-2 px-3 w-full focus:outline-none focus:border-black"
                    type="name"
                    id="name"
                    name="name"
                    placeholder="Name"
                    
                />
            </div>
            <div className="mb-4">
                <label htmlFor="last_name" className="block mb-1 font-medium text-gray-600">Last Name</label>
                <input
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    className="border-2 rounded-md border-gray-300 py-2 px-3 w-full focus:outline-none focus:border-black"
                    type="name"
                    id="name"
                    name="name"
                    placeholder="Name"
                   
                />
            </div>
            <div className="mb-4">
                <label htmlFor="username" className="block mb-1 font-medium text-gray-600">Username</label>
                <input
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    className="border-2 rounded-md border-gray-300 py-2 px-3 w-full focus:outline-none focus:border-black"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-1 font-medium text-gray-600">Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-2 rounded-md border-gray-300 py-2 px-3 w-full focus:outline-none focus:border-black"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    
                />
            </div>

            <div className="mb-4">
                <label htmlFor="is_admin" className="block mb-1 font-medium text-gray-600">IsAdmin</label>
                <input
                    value={is_admin}
                    onChange={(e) => setIsAdmin(e.target.value)}
                    className="border-2 rounded-md border-gray-300 py-2 px-3 w-full focus:outline-none focus:border-black"
                    type="text"
                    id="email"
                    name="is_admin"
                    placeholder="Email"
                   
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block mb-1 font-medium text-gray-600">Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-2 rounded-md border-gray-300 py-2 px-3 w-full focus:outline-none focus:border-black"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    
                />
            </div>
            <button
                className="bg-black hover:bg-grey-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Sign Up
            </button>
            <p className="text-gray-600 text-center mt-5">
            Already have an account? <Link to="/login" className="text-blue-500">Log In</Link>
            </p>
        </form>
    </div>
    )
}

export default Signup;