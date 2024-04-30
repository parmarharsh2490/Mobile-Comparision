import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const RootLayout = () => {
    const isAuthenticated = true;

  return (
    <div>
        {
            isAuthenticated ? (
                <Outlet></Outlet>
            ) : (<Navigate to={'/sign-in'}/>)
        }
      
    </div>
  )
}

export default RootLayout
