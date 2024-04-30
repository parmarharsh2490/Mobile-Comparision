
// import PhoneDetails from '../PhoneDetails'

import InputPhone from "@/components/Input"
import Navigation from "@/components/Navigation"
import AccessibleTable from "@/components/new"
import PhoneDetailsTable from "@/components/PhoneDetailsTable"

// import Phone from '../PhoneList'
const HomePage = () => {
  return (
    <div className="bg-white text-dark-3">
 <Navigation></Navigation>
    <div className=' flex sm:text-sm sm:border md:text-lg lg:text-xl'>
     {/* <PhoneDetails></PhoneDetails>
<Phone></Phone> */}
<div className="flex  flex-1 w-screen h-full">
{/* <PhoneDetailsTable></PhoneDetailsTable>  */}
<AccessibleTable></AccessibleTable>
<InputPhone></InputPhone>
</div>
    </div>    
    </div>
  )
}

export default HomePage
