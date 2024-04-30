import { useContext } from 'react';
// import iphonex from './../../Images/iphone x.jpg';
import data from './../../data/data.json';
import { Link } from 'react-router-dom';
import ProductListPhone from './ProductListPhone';
import { Input } from '@/components/ui/input';
import { MobileContext } from '@/components/store';

const PhonesListPage = () => {
  const { showPhones, showPhoneList } = useContext(MobileContext);

  return (
    <div>
      <div className='flex items-center justify-around mb-4 '>
        <Link to={'/home'} className="text-base md:text-lg lg:text-xl font-bold mr-4">Home</Link>
        <Link to={'/phoneslist'} className="text-base md:text-lg lg:text-xl font-bold hidden md:block">PhoneList</Link>
      <Input
          className="w-auto sm:w-64 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
          placeholder="Search Phones..."
          maxLength={50} // Set maximum length
          onChange={showPhones}
        />
        </div>
      <div>
        {showPhoneList.length !== 0 ? (
          showPhoneList.map((phone) => (
            <ProductListPhone key={phone.antutu_score} {...phone} />
          ))
        ) : (
          data.map((phone) => (
            <ProductListPhone key={phone.id} {...phone} />
          ))
        )}
      </div>
    </div>
  );
};

export default PhonesListPage;
