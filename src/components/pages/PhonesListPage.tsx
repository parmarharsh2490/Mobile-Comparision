import React, { useContext } from 'react'
import ProductListPhone from './ProductListPhone'
import iphonex from './../../Images/iphone x.jpg'
import data from './../../data/data.json'
import { Input } from '../ui/input'
import { MobileContext } from '../store'
import { Link } from 'react-router-dom'
const PhonesListPage = () => {
  const {showPhones,showPhoneList} = useContext(MobileContext)
  return (
    <>
      <div className='flex item-center'>
      <Link to={'/home'} className='text-center relative top-1  left-28 border border-b-black border-x-white border-t-white text-2xl mt-2'>Home</Link>
      <Link to={'/phonesList'} className='text-center relative top-1 left-2/4 border border-b-black border-x-white border-t-white text-2xl mt-2'>PhoneList</Link>
      <Input className=' absolute top-2 right-5 w-1/5 left-auto border border-gray-800 outline-none active:outline:none active:border-none' onChange={showPhones}></Input>
      </div>
      
   {showPhoneList.length !== 0 ? (<div className=''>
      {
        showPhoneList.map((phone)=>(
          <ProductListPhone image={iphonex} model={phone.model} ram={phone.ram} storage={phone.storage} camera={phone.camera} price={phone.price}     fingerprint={phone.fingerprint} colors={phone.colors} operating_system={phone.operating_system} antutu_score={phone.antutu_score} charging_speed={phone.charging_speed} charger={phone.charger} display_size={phone.display_size} display_type={phone.display_type} date_first_available={phone.date_first_available} in_the_box={phone.in_the_box} weight={phone.weight} customer_ratings={phone.customer_ratings} network_type={phone.network_type} processor={phone.processor} battery={phone.battery}           />
        ))
      }
    </div>)
    :
   ( <div>
    {
        data.map((phone)=>(
          <ProductListPhone image={iphonex} model={phone.model} ram={phone.ram} storage={phone.storage} camera={phone.camera} price={phone.price}     fingerprint={phone.fingerprint} colors={phone.colors} operating_system={phone.operating_system} antutu_score={phone.antutu_score} charging_speed={phone.charging_speed} charger={phone.charger} display_size={phone.display_size} display_type={phone.display_type} date_first_available={phone.date_first_available} in_the_box={phone.in_the_box} weight={phone.weight} customer_ratings={phone.customer_ratings} network_type={phone.network_type} processor={phone.processor} battery={phone.battery}           />
        ))
      }
    </div>)}
    </>
  )
}

export default PhonesListPage
