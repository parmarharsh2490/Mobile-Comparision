import { useContext, useState } from 'react';
import logo from './../Images/logo.png.png'
import { Button } from './ui/button'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { MobileContext } from './store';
import { VscThreeBars } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
const Navigation = () => {
    const { user } = useContext(MobileContext);
    const [showNavbar,setShowNavbar] = useState(true);
    return (
        <nav className='mb-2'>
            <div className='flex flex-row items-center justify-between px-7 relative mt-2'>
                <Link to={'/home'} className="flex items-center">
                    <img src={logo} alt="" className="h-12 w-auto" />
                </Link>
                <div className=" hidden md:block lg:block  md:space-x-16  lg:space-x-32  ">
                    <Link to={'/home'} className='nav-link'>Home</Link>
                    <Link to={'/phonesList'} className='nav-link'>Phones</Link>
                    <Link to={'/wishlist'} className='nav-link'>WishList</Link>
                </div>
                <div className="space-x-4 hidden md:flex">
                    {user?.username === '' ? (
                        <>
                            <Link to={'/signup'}><Button className='w-14 sm:w-20'>Signup</Button></Link>
                            <Link to={'/login'}><Button className='w-12 sm:w-20'>Login</Button></Link>
                        </>
                    ) : (
                        <Link to={'/profile'} className='flex items-center'>
                            <CgProfile size={'1.4rem'} />
                            <p className='font-semibold text-1xl ml-1'>Hello, {user?.username}</p>
                        </Link>
                    )}
                </div>
                <div className='md:hidden'>
                {showNavbar &&< VscThreeBars onClick={() => {setShowNavbar(!showNavbar)}} /> }
              { !showNavbar &&    <VscClose   onClick={() => {setShowNavbar(!showNavbar)}} /> }
                <div style={{backgroundColor : '#EEEEEE'}}  className={`${showNavbar ? 'hidden' : 'flex'} flex flex-col absolute top-12 text-4xl left-0 justify-start items-center p-3 w-screen h-screen`}>
                    <Link to={'/phonesList'} className='nav-link mt-8'>Phones</Link>
                    <Link to={'/wishlist'} className='nav-link mt-8'>WishList</Link>
                    <Link to={'/signup'} className='mt-8'>Signup</Link>
                            <Link to={'/login'} className='mt-8'>Login</Link>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
