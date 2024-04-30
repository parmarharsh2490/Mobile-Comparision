import { useContext } from 'react';
import { FaHeart } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';
import { MobileContext } from './store';

const PhoneDetailsTable = () => {
  const { filteredPhones, deletePhone, handleWishList } = useContext(MobileContext);

  return (
    <div className=" border border-red-800">
      <table className="">
        <thead>
          <tr className='border border-r-emerald-600'>
            <th className="px-4 py-2">Model</th>
            {filteredPhones.map((phone, index) => (
              <th key={index} className="px-4 py-2">
                <div>
                  <p>{phone.model}</p>
                  <div>
                    <button onClick={() => handleWishList(phone)} className="text-blue-500">
                      <FaHeart />
                    </button>
                    <button onClick={() => deletePhone(phone.model)} className="text-red-500">
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
            <td className="px-4 py-2">Display Type</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="px-4 py-2">{phone.display_type}</td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-2">Display Size</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="px-4 py-2">{phone.display_size}</td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-2">RAM</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="px-4 py-2">{phone.ram}</td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-2">Storage</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="px-4 py-2">{phone.storage}</td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-2">Price</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="px-4 py-2">{phone.price}</td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-2">Processor</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="px-4 py-2">{phone.processor}</td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-2">Battery</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="px-4 py-2">{phone.battery}</td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-2">Charger</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="px-4 py-2">{phone.charger}</td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-2">Charging Speed</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="px-4 py-2">{phone.charging_speed}</td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-2">Camera</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="px-4 py-2">{phone.camera}</td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-2">Fingerprint</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="px-4 py-2">{phone.fingerprint}</td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-2">Antutu Score</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="px-4 py-2">{phone.antutu_score}</td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-2">Network Type</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="px-4 py-2">{phone.network_type}</td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-2">Customer Ratings</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="px-4 py-2">{phone.customer_ratings}</td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-2">Operating System</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="px-4 py-2">{phone.operating_system}</td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-2">Colors</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="px-4 py-2">{phone.colors?.join(', ')}</td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-2">Weight</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="px-4 py-2">{phone.weight}</td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-2">Date First Available</td>
            {filteredPhones.map((phone, index) => (
              <td key={index} className="px-4 py-2">{phone.date_first_available}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PhoneDetailsTable;
