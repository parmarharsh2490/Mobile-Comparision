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
        <Card className='w-2/4 overflow-hidden sm:text-xl  m-0 p-0'>
        <CardHeader>
          <CardTitle>
            <Input className='inline-block max-w-48' onChange={showPhones} />
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
