import Navigation from '../Navigation'
// import PhoneDetails from '../PhoneDetails'
// import Phone from '../PhoneList'
import InputPhone from '../Input'
import Layout from '../table/layout'
const HomePage = () => {
  return (
    <div>
 <Navigation></Navigation>
    <div className=' flex sm:text-sm sm:border border-black md:text-lg lg:text-xl'>
     {/* <PhoneDetails></PhoneDetails>
<Phone></Phone> */}
<Layout></Layout>
<InputPhone></InputPhone>
    </div>    
    </div>
  )
}

export default HomePage
