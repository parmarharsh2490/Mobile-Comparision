import  { useContext } from 'react'
import { MobileContext } from '../store'
import ProductListPhone from './ProductListPhone'

const WishListPage = () => {
  const {wishListPhones} = useContext(MobileContext)
  return (
    <div>
      <h3 className='text-center text-3xl my-2'>WishList Phones</h3>
      {
        wishListPhones.map((phone)=>(
          <div>
            <ProductListPhone {...phone}></ProductListPhone>
          </div>
        ))
      }
    </div>
  )
}

export default WishListPage
