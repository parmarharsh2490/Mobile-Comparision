import { Route, Routes } from 'react-router-dom';
import './App.css'
import './index.css'
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import HomePage from './_root/pages/HomePage';
import PhonesListPage from './_root/pages/PhonesListPage';
import WishListPage from './_root/pages/WishListPage';


const App = () => {

  return (
   <main className=''>
     <Routes>
      {/* public routes  */}
      <Route element={<AuthLayout/>}> 
        <Route path='/sign-up' element={<SignupForm/>}></Route>
        <Route path='/sign-in' element={<SigninForm/>}></Route>
      </Route>

      {/* private routes  */}
      <Route element={<RootLayout/>}>
        <Route index element={<HomePage/>}></Route>
        {/* <Route path='/phonesList' element={<PhonesListPage/>}></Route>
        <Route path='/wishlist' element={<WishListPage/>}></Route> */}
      </Route>
        {/* <Route path='/profile' element={<ProfilePage/>}></Route> */}
        {/* <Route path='/profile/history' element={<HistoryPage/>}></Route> */}
    </Routes>
   </main>
  );
};

export default App;
