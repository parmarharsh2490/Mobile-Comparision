import { useContext } from 'react';
import { FaHeart } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';
import { MobileContext } from './store';

const Phone = () => {
  const { filteredPhones, deletePhone, handleWishList } = useContext(MobileContext);

  return (
    <div className="flex flex-wrap justify-start">
      {filteredPhones.length > 0 && filteredPhones.map((phone, index) => (
        <div key={index} className="flex flex-col border border-gray-400 m-2 w-2/5 text-xs">
          <div className="flex justify-between items-center border-b border-gray-400 p-2 ">
            <p className="text-base lg:text-xl">{phone?.model}</p>
            <div className="flex">
              <button onClick={() => { handleWishList(phone) }} className="p-2 flex items-center">
                <FaHeart className="h-5 w-5" />
              </button>
              <button onClick={() => { deletePhone(phone.model) }} className="p-2 flex items-center">
                <MdDelete className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex flex-col p-2">
            <p>{phone['display_type']}</p>
            <p>{phone['display_size']}</p>
            <p>{phone.ram} / {phone.storage}</p>
            <p>{phone.price}</p>
            <p>{phone.processor}</p>
            <p>{phone.battery}</p>
            <p>{phone.charger}</p>
            <p>{phone['charging_speed']}</p>
            <p>{phone.camera}</p>
            <p>{phone.fingerprint}</p>
            <p>{phone['antutu_score']}</p>
            <p>{phone['network_type']}</p>
            <p>{phone['customer_ratings']}</p>
            <p>{phone['operating_system']}</p>
            <p>{phone.colors?.join(', ')}</p>
            <p>{phone.weight}</p>
            <p>{phone['date_first_available']}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Phone;