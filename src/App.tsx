import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ProfilePage from './components/pages/ProfilePage';
import PhonesListPage from './components/pages/PhonesListPage';
import WishListPage from './components/pages/WishListPage';
import HistoryPage from './components/pages/HistoryPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import MobileProvider from './components/store';

const App = () => {

  return (
    <MobileProvider>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/phonesList' element={<PhonesListPage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/wishlist' element={<WishListPage/>}></Route>
        <Route path='/profile/history' element={<HistoryPage/>}></Route>
      </Routes>
    </MobileProvider>
  );
};

export default App;
