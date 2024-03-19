import React from 'react'

const Register = () => {
  return (
    <div className='flex flex-col bg-white w-full items-center justify-center h-screen'>
      <div className='flex flex-col border-2 border-sky-700 p-10 rounded-lg'>
        <h1 className='text-3xl font-semibold'> Create an Account</h1>
        <p className='my-5'>Enter your detail below </p>
        <input className='border-b-2 border-gray-40 text-2xl p-2  focus:border-blue-600'  placeholder="Name"/>
        <input className='border-b-2 border-gray-40 text-2xl p-2 mt-2 focus:border-blue-600' type="email" placeholder="Email"/>
        <input className='border-b-2 border-gray-40 text-2xl p-2 mt-2  focus:border-blue-600' type="password" placeholder="Password"/>
        <button className='bg-red-600 border-2 text-white font-semibold border-gray-800 rounded-lg mt-4 py-3 hover:bg-green-500 '>Create an account</button>
        <p>Already have an account? <a href='./Login'>Login</a></p>
    
      </div>
    </div>  
  )
}

export default Register
