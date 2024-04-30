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
import { SignupSchema } from "@/lib/validation/index.ts";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useHandleSignup } from "@/lib/react-query/queries";
import { signInAccount } from "@/lib/appwrite/api";
import { AuthContext } from "@/context/AuthContext";
const SignupForm = () => {
  const {checkAuthUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const { toast } = useToast();
const form = useForm({
  resolver: zodResolver(SignupSchema),
  defaultValues: {
    name: "parmar harsh",
    username : 'hp2842A',
    email: "parmarharsh6482@gmail.com",
    password: "12121212",
  },
});

const {mutateAsync : createUserAccount , isPending : IsCreatingUser} = useHandleSignup();
const onSubmit = async (data: z.infer<typeof SignupSchema>) => {
  const newUser = await createUserAccount(data);
  if(!newUser){
    return toast({title : 'Sign up failed'})
  }
  const session = await signInAccount(data);
  if(!session){
    toast({ title: "Something went wrong. Please login your new account", });
  
  navigate("/sign-in");
  
  return;
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
        <h3 className="h3-bold md:h2-bold pt-5 sm:pt-12">Create a new account</h3>
        <p className="text-light-3 small-medium md:base-regular mt-2">To use website, please enter your details</p>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input  className="shad-input" 
                  {...field} 
                  type="name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field}   className="shad-input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
       
      <Button type="submit"  className="w-full shad-button_primary" disabled={isSubmitting}>
        {IsCreatingUser ? "Loading..." : "Register"}
      </Button>
      <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account?
            <Link
              to="/sign-in"
              className="text-primary-500 text-small-semibold ml-1">
              Log in
            </Link>
          </p>
      <Toaster></Toaster>
    </form>
    </div>
  </Form>
);
};

export default SignupForm;