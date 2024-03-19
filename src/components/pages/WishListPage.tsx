import  { useContext } from 'react'
import { MobileContext } from '../store'
import ProductListPhone from './ProductListPhone'

const WishListPage = () => {
  const {wishListPhones} = useContext(MobileContext)
  return (
    <div>
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
