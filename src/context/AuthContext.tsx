import React, { ReactNode, createContext, useState, useEffect } from "react";
import data from './../data/data.json'
import { INewUser, Phone, User } from "@/types";
import { getCurrentUser } from "@/lib/appwrite/api";
import { useNavigate } from "react-router-dom";
import { boolean } from "zod";
// import { useNavigate } from "react-router-dom";

export const INTIAL_USER = {
  username: "",
  email: "",
  name: "",
  wishList: [],
};

// interface MobileContextData {
//   filteredPhones: Phone[];
//   addPhone: (phone: Phone) => void;
//   deletePhone: (model: string) => void;
//   showInput: boolean;
//   showList: boolean;
//   showPhoneList: Phone[];
//   showPhones: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleWishList: (phone: Phone) => void;
//   wishListPhones: Phone[];
//   user: User;
//   handleSignup: (newUser: INewUser) => void;
//   handleLogin: (loginUser: { email: string; password: string }) => void;
//   showSignupSuccessToast: boolean;
//   loading: boolean;
// }

export const INITIAL_STATE = createContext({
  // filteredPhones: [],
  // addPhone: () => {},
  // deletePhone: () => {},
  // showInput: true,
  // showList: false,
  // showPhoneList: [],
  // showPhones: () => {},
  // handleWishList: () => {},
  // wishListPhones: [],
  user: {
    username: "",
    email: "",
    name: "",
    wishList: [],
  },
  setUser : () => {},
  checkAuthUser : () => {},
  isLoading: true,
  isAuthenticated : false,
});

export const AuthContext = createContext(INITIAL_STATE);
export const AuthProvider = ({children}: {children : ReactNode}) => {
  const navigate = useNavigate();
  const [isLoading,setIsLoading] = useState(false);
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User>(INTIAL_USER);
  const checkAuthUser = async () => {
    setIsLoading(true);
    try {
      const currentAccount = await getCurrentUser();
      console.log('currentAccount')
      console.log(currentAccount)
      if (currentAccount) {
        setUser({
          id: currentAccount.$id,
          name: currentAccount.name,
          username: currentAccount.username,
          email: currentAccount.email,
          imageUrl: currentAccount.imageUrl,
          bio: currentAccount.bio,
        });
        setIsAuthenticated(true);

        return true;
      }

      return false;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  const value = {
    user,
    isAuthenticated,
    setUser,
    isLoading,
    checkAuthUser
  };
  useEffect(() => {
    const cookieFallback = localStorage.getItem("cookieFallback");
    if (
      cookieFallback === "[]" ||
      cookieFallback === null ||
      cookieFallback === undefined
    ) {
      navigate("/sign-in");
    }

    checkAuthUser();
  }, []);
  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
