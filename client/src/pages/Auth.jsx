import React, { useState } from 'react'
import authImg from '../assets/authImg.png'
import authForm from '../assets/authForm.png'
import Login from '../components/authComponent/Login'
import Signup from '../components/authComponent/Signup'
function Auth() {
    const [login, setLogin] = useState(false)
  return (
    <div className='flex bg-white rounded-lg {
        
    }'>
      <div className='w-2/3'>
        <img className='rounded-l-lg' src={authImg} alt="no image found" />
      </div>
      <div className='w-1/3 p-6'>
        <div className='flex gap-4 items-center justify-center'>
            <img className='h-6 w-6' src={authForm} alt="img not found" />
            <h1 className='font-bold text-xl'>Masai Forum</h1>
        </div>
        {login?<Login/>:<Signup/>}
      </div>
    </div>
  )
}

export default Auth
