import { useContext } from 'react';
// import data from '../../data/data.json'
import  './Layout.css'
import { MobileContext } from '../store';
import { Button } from '../ui/button';
import { FaHeart } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
const layout = () => {
    const {filteredPhones,deletePhone,handleWishList} = useContext(MobileContext);

  return (
    <div>
      <table className='lg:text-2xl md:text-lg sm:text-sm '>
        <thead className=''>
            <th className=''>Mobile Phone</th>
            {
                filteredPhones.map((phone)=>(
                  <>
                   <th className=' items-center justify-center'>
              <p className=' inline-block'>{phone?.model}</p>
             <div className='  inline-block'>
             <Button className=' h-1 w-1 mx-1 lg:mx-3 md:mx-2' onClick={()=>{handleWishList(phone)}}>
              <p > <FaHeart /></p> 
              </Button>
              <Button className=' h-1 w-1' onClick={()=>{deletePhone(phone.model)}}>
              <p className=''><MdDelete/></p>
              </Button>
             </div>
            </th>
                  </>
                ))
            }
        </thead>
        <tbody>
            <tr>
            <td  className=''>Display Type</td>
            {
                filteredPhones.map((name)=>(
                    // <table>
                        
                    <td className='font-normal'>{name.display_type}</td>
                    // </table>
                ))
                }
            </tr>
            <tr>
            <td >Display Type</td>
            {
                filteredPhones.map((name)=>(
                    <td className='font-normal'>{name.display_type}</td>
                ))
                }
            </tr>
            <tr>
            <td>Charging speed</td>
            {
                filteredPhones.map((name)=>(
                    <td className='font-normal'>{name.charging_speed}</td>
                ))
                }
            </tr>
            <tr>
            <td>Camera</td>
            {
                filteredPhones.map((name)=>(
                    <td className='font-normal'>{name.camera}</td>
                ))
                }
            </tr>
            <tr>
            <td>Battery</td>
            {
                filteredPhones.map((name)=>(
                    <td className='font-normal'>{name.battery}</td>
                ))
                }
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default layout
