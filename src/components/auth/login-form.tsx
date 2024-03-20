import CardWrapper from "./card-wrapper";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { LoginSchema } from '../schema/index.ts'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MobileContext } from "../store/index.tsx";
import { Toaster } from "../ui/toaster.tsx";
import { useToast } from "../ui/use-toast.ts";

const LoginForm = () => {
    const { toast } = useToast();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); // State to track loading status
    const {handleLogin} = useContext(MobileContext)
    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "parmarharsh@gmail.com",
            password: "121212",
        },
    });

    const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
        setLoading(true); // Set loading status to true when form is submitted
        console.log(data);
        // Simulate login process with delay
        setTimeout(() => {
            console.log('setTimeOut');
            handleLogin(data);
            setLoading(false); // Reset loading status after login process completes
            navigate('/home'); // Navigate to the home page after successful login
        }, 2000);
    };

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
                    <Button onClick={() => {
        toast({
          title: "Congratulation",
          description: ' Successfully Login',
        })
      }} type="submit" className="w-full" disabled={loading}>
                        {loading ? "Loading..." : "Login"}
                    </Button>
                    <Toaster></Toaster>
                </form>
            </Form>
        </CardWrapper>
    );
};

export default LoginForm;
