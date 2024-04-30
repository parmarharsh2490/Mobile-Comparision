import React, { ReactNode, createContext, useState, useEffect } from "react";
import data from "./../../data/data.json";
import { INewUser, Phone, User } from "@/types";
// import { useNavigate } from "react-router-dom";

const INTIAL_USER = {
  username: "",
  email: "",
  name: "",
  wishList: [],
};

interface MobileContextData {
  filteredPhones: Phone[];
  addPhone: (phone: Phone) => void;
  deletePhone: (model: string) => void;
  showInput: boolean;
  showList: boolean;
  showPhoneList: Phone[];
  showPhones: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleWishList: (phone: Phone) => void;
  wishListPhones: Phone[];
  user: User;
  handleSignup: (newUser: INewUser) => void;
  handleLogin: (loginUser: { email: string; password: string }) => void;
  showSignupSuccessToast: boolean;
  loading: boolean;
}

export const INITIAL_STATE = createContext<MobileContextData>({
  filteredPhones: [],
  addPhone: () => {},
  deletePhone: () => {},
  showInput: true,
  showList: false,
  showPhoneList: [],
  showPhones: () => {},
  handleWishList: () => {},
  wishListPhones: [],
  user: {
    username: "",
    email: "",
    name: "",
    wishList: [],
  },
  handleSignup: () => {},
  handleLogin: () => {},
  showSignupSuccessToast: false,
  loading: false,
});

export const MobileContext = createContext(INITIAL_STATE);
const MobileProvider = ({children} : {children: ReactNode}) => {
  // const navigate = useNavigate();
  const [filteredPhones, setFilteredPhones] = useState<Phone[]>([]);
  const [showList, setShowList] = useState<boolean>(false);
  const [showPhoneList, setShowPhoneList] = useState<Phone[]>([]);
  const [showInput, setShowInput] = useState<boolean>(true);
  const [user, setUser] = useState<User>(INTIAL_USER);
  const handleWishList = (Phone: Phone) => {
    //  if(wishListPhones.indexOf(Phone) === -1){
    //   setWishListPhones([...wishListPhones, Phone]);
    // }
  };
 
  const handleSignup = async () => console.log("signup");
  const handleLogin = async (user: { email: string; password: string }) => {};
  const showPhones = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    let newList: Phone[] = [];
    if (searchTerm.length > 0) {
      setShowList(true);
      newList = data.filter((phone) =>
        phone.model.toLowerCase().includes(searchTerm)
      );
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
    setFilteredPhones(filteredPhones.filter((phone) => phone.model !== model));
  };

  useEffect(() => {
    setShowInput(filteredPhones.length < 3);
  }, [filteredPhones]);
  const value = {
    filteredPhones,
    addPhone,
    deletePhone,
    showInput,
    showList,
    showPhoneList,
    showPhones,
    handleWishList,
    user,
    handleSignup,
    handleLogin,
  };
  return (
    <MobileContext.Provider value={value}>{children}</MobileContext.Provider>
  );
};

export default MobileProvider;
