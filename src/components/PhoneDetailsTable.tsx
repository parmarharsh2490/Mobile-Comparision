import { useContext } from 'react';
import { FaHeart } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';
import { MobileContext } from './store';

const PhoneDetailsTable = () => {
  const { filteredPhones, deletePhone, handleWishList } = useContext(MobileContext);

  return (
    <div className="overflow-x-auto">
      <table className="">
        <thead>
          <tr>
            <th className="p-2 text-center">Model</th>
            {filteredPhones.map((phone) => (
              <th key={phone.model} className="p-2 text-center">
                <div className="flex flex-col border border-e-black items-center justify-center">
                  <p className=''>{phone.model}</p>
                  <div className="flex justify-center mt-2">
                    <button  onClick={() => handleWishList(phone)} className="ml-2 -mt-1">
                      <FaHeart />
                    </button>
                    <button onClick={() => deletePhone(phone.model)} className='ml-2 -mt-1'>
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 text-center">Display Type</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="p-2  text-center">{phone.display_type}</td>
            ))}
          </tr>
          <tr>
            <td className="p-2  text-center">Display Size</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="p-2 text-center">{phone.display_size}</td>
            ))}
          </tr>
          <tr>
            <td className="p-2  text-center">RAM</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="p-2  text-center">{phone.ram}</td>
            ))}
          </tr>
          <tr>
            <td className="p-2  text-center">Storage</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="p-2  text-center">{phone.storage}</td>
            ))}
          </tr>
          <tr>
            <td className="p-2  text-center">Price</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="p-2  text-center">{phone.price}</td>
            ))}
          </tr>
          <tr>
            <td className="p-2  text-center">Processor</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="p-2  text-center">{phone.processor}</td>
            ))}
          </tr>
          <tr>
            <td className="p-2  text-center">Battery</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="p-2  text-center">{phone.battery}</td>
            ))}
          </tr>
          <tr>
            <td className="p-2  text-center">Charger</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="p-2  text-center">{phone.charger}</td>
            ))}
          </tr>
          <tr>
            <td className="p-2  text-center">Charging Speed</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="p-2  text-center">{phone.charging_speed}</td>
            ))}
          </tr>
          <tr>
            <td className="p-2  text-center">Camera</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="p-2  text-center">{phone.camera}</td>
            ))}
          </tr>
          <tr>
            <td className="p-2  text-center">Fingerprint</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="p-2  text-center">{phone.fingerprint}</td>
            ))}
          </tr>
          <tr>
            <td className="p-2  text-center">Antutu Score</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="p-2  text-center">{phone.antutu_score}</td>
            ))}
          </tr>
          <tr>
            <td className="p-2  text-center">Network Type</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="p-2  text-center">{phone.network_type}</td>
            ))}
          </tr>
          <tr>
            <td className="p-2  text-center">Customer Ratings</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="p-2  text-center">{phone.customer_ratings}</td>
            ))}
          </tr>
          <tr>
            <td className="p-2  text-center">Operating System</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="p-2  text-center">{phone.operating_system}</td>
            ))}
          </tr>
          <tr>
            <td className="p-2  text-center">Colors</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="p-2  text-center">{phone.colors?.join(', ')}</td>
            ))}
          </tr>
          <tr>
            <td className="p-2  text-center">Weight</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="p-2  text-center">{phone.weight}</td>
            ))}
          </tr>
          <tr>
            <td className="p-2  text-center">Date First Available</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="p-2  text-center">{phone.date_first_available}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PhoneDetailsTable;
