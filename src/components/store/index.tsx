import React, { ReactNode, createContext, useState, useEffect } from "react";
import data from './../../data/data.json';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {app} from './../firebase'
// import { useNavigate } from "react-router-dom";
interface Phone {
  image : string;
  model: string;
  display_type: string;
  display_size: string;
  ram: string;
  storage: string;
  price: string;
  processor: string;
  battery: string;
  charger: string;
  charging_speed: string;
  camera: string;
  fingerprint: string;
  antutu_score: string;
  network_type: string;
  customer_ratings: string;
  operating_system: string;
  colors: string[];
  weight: string;
  date_first_available: string;
  in_the_box: string[];
}

interface User {
  // Define properties for user details
  username: string;
  email: string;
  password : string,
  // Add other relevant properties
}
interface LoginUser{
  email : string;
  password : string
}
interface SignupUser{
  email : string;
  password : string;
  confirmPassword : string;
  name : string;
}
interface MobileContextData {
  filteredPhones: Phone[];
  addPhone: (phone: Phone) => void;
  deletePhone: (model: string) => void;
  showInput: boolean;
  showList: boolean;
  showPhoneList: Phone[];
  showPhones : (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleWishList : (phone : Phone) => void,
  wishListPhones : Phone[],
  user: User; 
  handleSignup : (newUser : SignupUser) => void,
  handleLogin : (loginUser : LoginUser) => void,
  showSignupSuccessToast : boolean,
  loading : boolean,
}

export const MobileContext = createContext<MobileContextData>({
  filteredPhones: [],
  addPhone: () => {},
  deletePhone: () => {},
  showInput: true,
  showList: false,
  showPhoneList: [],
  showPhones : () => {},
  handleWishList : () => {},
  wishListPhones : [],
  user : {
    username : '',
    email : '',
    password : ''
  },
  handleSignup : () => {},
  handleLogin : () => {},
  showSignupSuccessToast : false,
  loading : false,
});

export interface Props {
  children: ReactNode;
}

export const MobileProvider = ({ children }: Props) => {
  const auth = getAuth(app);
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showSignupSuccessToast,setShowSignupSuccessToast] = useState<boolean>(false);
  const [wishListPhones,setWishListPhones] = useState<Phone[]>([]);
  const [filteredPhones, setFilteredPhones] = useState<Phone[]>([]);
  const [showList, setShowList] = useState<boolean>(false);
  const [showPhoneList, setShowPhoneList] = useState<Phone[]>([]);
  const [showInput, setShowInput] = useState<boolean>(true);
  const user = {
    username : '',
    email : '',
    password : ''
  }; 
  // const [user, setUser] = useState<User>({
  //   username : '',
  //   email : '',
  //   password : ''
  // }); 
  const handleWishList = (Phone : Phone) => {
   if(wishListPhones.indexOf(Phone) === -1){
    setWishListPhones([...wishListPhones, Phone]);
  }
}
const handleSignup = async (newUser : SignupUser) => {
  setLoading(true);
  try{
     await createUserWithEmailAndPassword(auth,newUser.email,newUser.password);
    setShowSignupSuccessToast(true);
    setTimeout(() => {
      setShowSignupSuccessToast(false);
    }, 2000);
    // navigate('/home');
  }
  catch{
    setShowSignupSuccessToast(false);
    alert('Account has been already created');
  }
  finally{
    setLoading(false);
  }
}

  const handleLogin = async (loginUser : LoginUser) => {
    setLoading(true);
    try{
     await signInWithEmailAndPassword(auth,loginUser.email,loginUser.password);
    setShowSignupSuccessToast(true);
    setTimeout(() => {
      setShowSignupSuccessToast(false);
    }, 2000);
    // navigate('/home');
  }
  catch{
    setShowSignupSuccessToast(false);
    alert('Account has not been already created Or Wrong Password');
  }
  finally{
    setLoading(false);
  }
  }
  const showPhones = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    let newList: Phone[] = [];
    if (searchTerm.length > 0) {
      setShowList(true);
      newList = data.filter(phone => phone.model.toLowerCase().includes(searchTerm));
    } else {
      setShowList(false);
    }
    setShowPhoneList(newList);
  };

  const addPhone = (phone: Phone) => {
    console.log(phone);
    setFilteredPhones([...filteredPhones, phone]);
  };

  const deletePhone = (model: string) => {
    console.log(model);
    setFilteredPhones(filteredPhones.filter(phone => phone.model !== model));
  };

  useEffect(() => {
    setShowInput(filteredPhones.length < 2);
  }, [filteredPhones]);

  return (
    <MobileContext.Provider value={{ filteredPhones, addPhone, deletePhone, showInput, showList, showPhoneList , showPhones,handleWishList,wishListPhones,user,handleSignup,handleLogin,showSignupSuccessToast,loading}}>
      {children}
    </MobileContext.Provider>
  );
};

export default MobileProvider;
