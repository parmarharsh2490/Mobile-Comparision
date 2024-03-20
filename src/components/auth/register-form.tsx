"use client";

import CardWrapper from "./card-wrapper";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RegisterSchema } from '../schema/index.ts';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useFormState } from 'react-hook-form'
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MobileContext } from "../store/index.tsx";
import { useToast } from "../ui/use-toast.ts";
import { Toaster } from "../ui/toaster.tsx";
const RegisterForm = () => {
  const { toast } = useToast();
  const {handleSignup} = useContext(MobileContext);
  const navigate = useNavigate()
const [loading, setLoading] = useState(false);
const form = useForm({
  resolver: zodResolver(RegisterSchema),
  defaultValues: {
    email: "parmarharsh@gmail.com",
    name: "parmar harsh",
    password: "121212",
    confirmPassword: "121212",
  },
});

const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
  // setUserName(data.name)
  setLoading(true); // Set loading status to true when form is submitted
  console.log(data);
  handleSignup(data);
  // Simulate login process with delay
  setTimeout(() => {
      setLoading(false); // Reset loading status after login process completes
      navigate('/home'); // Navigate to the home page after successful login
  }, 2000);
};

const { isSubmitting } = useFormState(form); // Change this line

return (
  <CardWrapper
  label="Create an account"
  title="Register"
  backButtonHref="/login"
  backButtonLabel="Already have an account? Login here."
>
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="user@gmail.com"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="User name" />
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
                <Input {...field} type="password" placeholder="******" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" placeholder="******" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <Button type="submit"  onClick={() => {
        toast({
          title: "Congratulation",
          description: ' Successfully Signup',
        })
      }} className="w-full" disabled={isSubmitting}>
        {loading ? "Loading..." : "Register"}
      </Button>
      <Toaster></Toaster>
    </form>
  </Form>
</CardWrapper>
);
};

export default RegisterForm;