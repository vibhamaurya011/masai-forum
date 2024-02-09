import React from 'react'

function Login() {
  return (
    <form action="" className='flex flex-col gap-4 p-8'>
            <h1 className='font-medium text-lg'>Nice to see you again</h1>
            <label>Email</label>
            <input className='p-2 bg-gray-100 rounded-lg outline-none' type="email" placeholder='Enter Email' />
            <label>Password</label>
            <input className='p-2 bg-gray-100 rounded-lg outline-none' type="password" placeholder='Enter Password' />
            <div className='flex justify-between'>
                <h1>Remember me</h1>
                <a className='text-blue-500' href="#">Forgot password?</a>
            </div>
            <button className='bg-blue-800 text-white p-2 rounded-lg'>Login</button>
            <hr />
            <button className='bg-black text-white p-2 rounded-lg'>Or sign in with Google</button>
            <div>
                <span>Dont have an account?</span>
                <span className='text-blue-500 ml-2'>Sign up now</span>
            </div>
        </form>
  )
}

export default Login
