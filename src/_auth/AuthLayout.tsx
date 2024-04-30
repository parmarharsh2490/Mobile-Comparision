import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='h-screen flex flex-1 items-center justify-center'>
        <section className='w-1/2 flex flex-col items-center justify-center py-10'>
      <Outlet></Outlet>
        </section>
        <img src="/assets/images/Smartphone.png" className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat' alt="smartphones" />
    </div>
  )
}

export default AuthLayout
