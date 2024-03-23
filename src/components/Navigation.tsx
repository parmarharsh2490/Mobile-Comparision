import { useContext } from 'react';
import logo from './../Images/logo.png.png'
import { Button } from './ui/button'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { MobileContext } from './store';

const Navigation = () => {
    const { user } = useContext(MobileContext);

    return (
        <nav className='mb-2'>
            <div className='flex flex-row items-center justify-between px-7 relative mt-2'>
                <Link to={'/home'} className="flex items-center">
                    <img src={logo} alt="" className="h-12 w-auto" />
                </Link>
                <div className="flex hidden items-center md:block lg:block  md:space-x-16  lg:space-x-32 sm:hidden ">
                    <Link to={'/home'} className='nav-link'>Home</Link>
                    <Link to={'/phonesList'} className='nav-link'>Phones</Link>
                    <Link to={'/wishlist'} className='nav-link'>WishList</Link>
                </div>
                <div className="flex items-center space-x-4">
                    {user?.username === '' ? (
                        <>
                            <Link to={'/signup'}><Button>Signup</Button></Link>
                            <Link to={'/login'}><Button>Login</Button></Link>
                        </>
                    ) : (
                        <Link to={'/profile'} className='flex items-center'>
                            <CgProfile size={'1.4rem'} />
                            <p className='font-semibold text-1xl ml-1'>Hello, {user?.username}</p>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
