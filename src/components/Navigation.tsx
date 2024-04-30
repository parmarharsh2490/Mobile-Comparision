import { useContext, useState } from 'react';
import logo from './../Images/logo.png.png';
import { Button } from './ui/button';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { MobileContext } from './store';
import { VscThreeBars, VscClose } from 'react-icons/vsc';
import { AuthContext } from '@/context/AuthContext';

const Navigation = () => {
    const { user } = useContext(AuthContext);
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <nav className=''>
            <div className='flex items-center text-dark-4  bg-white w-screen justify-between p-2'>
                <Link to='/home' className='ml-6'>
                    <img src='/assets/images/logo.png' alt="Logo" className="h-12 w-auto" />
                </Link>
                <div className='hidden md:block lg:block space-x-12'>
                    {/* <Link to='/' className='nav-link'>Home</Link> */}
                    <Link to='/phonesList' className='border p-3  border-b-blue-800'>Phones</Link>
                    <Link to='/wishlist' className='border p-3  border-b-blue-800'>WishList</Link>
                </div>
                <div className='space-x-4 hidden md:flex mr-8'>
                    {user?.username === '' ? (
                        <>
                            <Link to='/sign-up'><Button className='w-20  shad-button_primary'>Signup</Button></Link>
                            <Link to='/sign-in'><Button className='w-20  shad-button_primary'>Login</Button></Link>
                        </>
                    ) : (
                        <Link to='/profile' className='flex items-center'>
                            <CgProfile size='1.4rem' />
                            <p className='font-semibold text-1xl ml-1'>Hello, {user?.username}</p>
                        </Link>
                    )}
                </div>
                <div className='md:hidden'>
                    {showNavbar ? 
                        <VscThreeBars onClick={() => setShowNavbar(!showNavbar)} /> :
                        <VscClose onClick={() => setShowNavbar(!showNavbar)} />
                    }
                    <div className={`${showNavbar ? '' : 'hidden'} fixed top-16 inset-x-0 bg-gray-200 border-t border-gray-300 p-3`}>
                        <Link to='/phonesList' className='block my-3'>Phones</Link>
                        <Link to='/wishlist' className='block my-3'>WishList</Link>
                        {user?.username === '' ? (
                            <>
                                <Link to='/sign-up' className='block my-3 shad-button_dark_4'>Signup</Link>
                                <Link to='/sign-in' className='block my-3 shad-button_primary'>Login</Link>
                            </>
                        ) : (
                            <Link to='/profile' className='block my-3'>
                                <CgProfile size='1.4rem' />
                                <span className='font-semibold ml-2'>Hello, {user?.username}</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
