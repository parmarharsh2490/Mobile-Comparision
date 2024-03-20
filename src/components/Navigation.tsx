import { useContext } from 'react';
import logo from './../Images/logo.png.png'
import { Button } from './ui/button'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { MobileContext } from './store';
const Navigation = () => {
    // const {isLogin} = useContext(MobileContext);
    const  {user} = useContext(MobileContext);
    console.log('user' + user?.username);
  return (
    <nav className='mb-2'>
      <ul className='flex flex-row items-center justify-start px-7  relative mt-2'>
        <Link to={'/home'}> <img src={logo} alt="" height={'100px'} width={'200px'}/></Link>
        <Link to={'/home'} className='relative float-left left-[350px] border border-b-black border-t-white border-x-white'>Home</Link>
        <Link to={'/phonesList'} className='relative float-left left-[450px] border border-b-black border-t-white border-x-white'>Phones</Link>
        <Link to={'/wishlist'} className='relative float-left left-[550px] border border-b-black border-t-white border-x-white'>WishList</Link>
        {
            user?.username === ''  ? (
                <>
                <Link to={'/signup'} className=' absolute top-0 right-1'><Button>Signup</Button></Link>
        <Link to={'/login'} className=' absolute top-0 right-24' ><Button>Login</Button></Link>
                </>
            )
            :
            (<li className='absolute top-0 right-24 flex mt-2 border border-b-black border-t-white border-x-white'>
            <p className='m-1'><CgProfile size={'1.4rem'} /></p>
            <p className='mx-1 font-semibold text-1xl m-[3px]'>Hello ,  {user?.username}</p>
        </li>)
        }
      </ul>
    </nav>
  )
}

export default Navigation
