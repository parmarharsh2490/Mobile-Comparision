import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from './ui/button';
import { Input } from './ui/input';
import { MobileContext } from './store';
import { useContext } from "react";
const InputPhone = () => {
  const {showInput,showList,showPhoneList,addPhone,showPhones} = useContext(MobileContext);
  return (
    <>
    {
      showInput && (
        <Card className='min-h-96 max-h-96'>
        <CardHeader>
          <CardTitle>
            <Input className='w-2/3 inline-block mx-2' onChange={showPhones} />
            <Button>Add</Button>
          </CardTitle>
        </CardHeader>
        {showList && (
  <CardContent>
    {showPhoneList.map((phone, index) => (
      <p key={index} onClick={()=>{addPhone(phone)}}>{phone.model}</p>
    ))}
  </CardContent>
)}
      </Card>  
      )
    }
    </>
  )
}

export default InputPhone
