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
  const {showInput, showList, showPhoneList, addPhone, showPhones} = useContext(MobileContext);

  return (
    <>
    {
      showInput && (
        <Card className='sm:text-xl h-full m-0 p-0 max-w-xs'>
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="flex-1 mr-2">
                <Input onChange={showPhones} />
              </div>
              <Button>Add</Button>
            </CardTitle>
          </CardHeader>
          {showList && (
            <CardContent className="max-h-40 overflow-y-auto">
              {showPhoneList.map((phone, index) => (
                <p key={index} onClick={()=>{addPhone(phone)}} className="cursor-pointer hover:bg-gray-200 py-1 px-2 rounded">{phone.model}</p>
              ))}
            </CardContent>
          )}
        </Card>  
      )
    }
    </>
  )
}

export default InputPhone;
