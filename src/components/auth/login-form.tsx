import CardWrapper from "./card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "../schema/index.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MobileContext } from "../store/index.tsx";
import { Toaster } from "../ui/toaster.tsx";
import { useToast } from "../ui/use-toast.ts";

const LoginForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { handleLogin, showSignupSuccessToast, loading } =
    useContext(MobileContext);
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "parmarharsh@gmail.com",
      password: "121212",
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    handleLogin(data);
  };

  useEffect(() => {
    if (showSignupSuccessToast) {
      toast({
        title: "Congratulations",
        description: "Successfully login",
      });
      setTimeout(() => {
        navigate("/home");
        //  setShowSignupSuccessToast(false);
      }, 2000);
    }
  }, [showSignupSuccessToast, toast]);

  return (
    <CardWrapper
      label="Login to your account"
      title="Login"
      backButtonHref="/signup"
      backButtonLabel="Don't have an account? Register here."
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
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </Button>
          <Toaster></Toaster>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
