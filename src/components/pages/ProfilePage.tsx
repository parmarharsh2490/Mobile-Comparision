import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const ProfilePage = () => {
  return (
    <div>
      <Link to={'/history'}>History</Link>
      <Link to={'/wishlist'}>WishList</Link>
      <Button>Logout</Button>
    </div>
  )
}

export default ProfilePage
