import  { useContext } from 'react'
import { FaHeart } from "react-icons/fa";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from './ui/button';
import { MobileContext } from './store';
import { MdDelete } from 'react-icons/md';
const Phone = () => {
  const {filteredPhones,deletePhone,handleWishList} = useContext(MobileContext)
  return (
    <>
       {filteredPhones.length > 0 && filteredPhones.map((phone, index) => (
        <Card key={index} className=' w-full h-full sm:text-sm text-xs md:text-lg lg:text-xl'>
          <CardHeader>
            <CardTitle className='flex sm:justify-around flex-col sm:flex-row'>
              <p className='inline-block mx-3 sm:text-base  md:text-lg text-base lg:text-xl'>{phone?.model}</p>
             <div className='flex items-center justify-start'>
             <Button className='h-5 w-3 mx-3' onClick={()=>{handleWishList(phone)}}>
              <p className=''> <FaHeart /></p> 
              </Button>
              <Button className=' h-5 w-3' onClick={()=>{deletePhone(phone.model)}}>
              <p className=''><MdDelete/></p>
              </Button>
             </div>
            </CardTitle>
          </CardHeader>
          <CardContent className='sm:text-base  md:text-lg text-xs lg:text-xll cardContent'>
            <p className='border border-b-2 border-x-0 border-t-0'>{phone.display_type}</p>
            <p>{phone.display_size}</p>
            <p>{phone.ram} / {phone.storage}</p>
            <p>{phone.price}</p>
            <p>{phone.processor}</p>
            <p>{phone.battery}</p>
            <p>{phone.charger}</p>
            <p>{phone.charging_speed}</p>
            <p>{phone.camera}</p>
            <p>{phone.fingerprint}</p>
            <p>{phone.antutu_score}</p>
            <p>{phone.network_type}</p>
            <p>{phone.customer_ratings}</p>
            <p>{phone.operating_system}</p>
            <p>{phone.colors?.join(', ')}</p>
            <p>{phone.weight}</p>
            <p>{phone.date_first_available}</p>
            {/* <p>{phone.in_the_box?.join(', ')}</p> */}
          </CardContent>
        </Card>
      ))}
    </>
  )
}

export default Phone
