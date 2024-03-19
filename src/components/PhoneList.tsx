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
        <Card key={index} className='w-3/12'>
          <CardHeader>
            <CardTitle className='flex justify-around'>
              <p className='inline-block mx-3'>{phone?.model}</p>
              <Button className='m-0 px-3 h-6 -mb-5' onClick={()=>{handleWishList(phone)}}>
              <p className=''> <FaHeart /></p> 
              </Button>
              <Button className='m-0 px-3 h-6 -mb-5' onClick={()=>{deletePhone(phone.model)}}>
              <p className=''><MdDelete/></p>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className='text-xl cardContent'>
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
