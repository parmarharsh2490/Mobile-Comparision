import Navigation from '../Navigation'
import PhoneDetails from '../PhoneDetails'
import Phone from '../PhoneList'
import InputPhone from '../Input'

const HomePage = () => {
  return (
    <div>
 <Navigation></Navigation>
    <div className=' flex '>
     <PhoneDetails></PhoneDetails>
<Phone></Phone>
<InputPhone></InputPhone>
    </div>    
    </div>
  )
}

export default HomePage
