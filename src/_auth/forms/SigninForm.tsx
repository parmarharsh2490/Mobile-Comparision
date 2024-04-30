"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useFormState } from 'react-hook-form'
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SigninSchema } from "@/lib/validation/index.ts";
import { MobileContext } from "@/components/store/index.tsx";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useHandleSignin } from "@/lib/react-query/queries";
import { AuthContext } from "@/context/AuthContext";
const SigninForm = () => {
  const { mutateAsync : signInAccount, isPending : loading } = useHandleSignin()
  const {checkAuthUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const { toast } = useToast();

const form = useForm({
  resolver: zodResolver(SigninSchema),
  defaultValues: {
    email: "parmarharsh6482@gmail.com",
    password: "12121212",
  },
});

const onSubmit = async (data: z.infer<typeof SigninSchema>) => {
  const session = await signInAccount(data);
  if(!session){
    toast({ title: "Something went wrong. Please login your new account", });
  
  navigate("/sign-in");
  
  return;
  }
  if(session){
    toast({ title: "Successfully, login", });
  }
  const isLoggedIn = await checkAuthUser();
  if (isLoggedIn) {
    form.reset();

    navigate("/");
  } else {
    toast({ title: "Login failed. Please try again.", });
    return;
  }

};

const { isSubmitting } = useFormState(form); 

return (
    // <div >
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        {/* <img src="/assets/images/logo.png" className=""  width={'250px'} alt="" /> */}
        <h3 className="h3-bold md:h2-bold pt-5 sm:pt-12">Welcome back!</h3>
        <p className="text-light-3 small-medium md:base-regular mt-2">To use website, login to  your details</p>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
      
        
     
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input  className="shad-input" 
                  {...field}
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input className="shad-input" {...field} type="password"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       
      {/* </div> */}
      <Button type="submit"  className="w-full shad-button_primary" disabled={isSubmitting}>
        {loading ? "Loading..." : "Login"}
      </Button>
      <p className="text-small-regular text-light-2 text-center mt-2">
            Don't have an account?
            <Link
              to="/sign-up"
              className="text-primary-500 text-small-semibold ml-1">
              Sign up
            </Link>
          </p>
      <Toaster></Toaster>
    </form>
    </div>
  </Form>
);
};

export default SigninForm;