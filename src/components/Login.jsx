import React from 'react'

function Login() {
  return (
    <div className='flex flex-col bg-white w-full items-center justify-center h-screen'>
      <div className='flex flex-col border-2 border-sky-700 p-10 rounded-lg'>
        <h1 className='text-5xl font-semibold'> Login</h1>
        <p className='my-5'>Enter your detail below </p>
        <input className='border-2 border-gray-800 text-2xl p-2 rounded-lg'  type="email" placeholder="Email"/>
        <input className='border-2 border-gray-800 text-2xl p-2 rounded-lg mt-2' type="password" placeholder="Password"/>
        <button className='bg-red-600 border-2 border-gray-800 rounded-lg mt-4 py-3'>Login</button>
      </div>
    </div>
  )
}

export default Login
