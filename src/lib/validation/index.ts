import * as z from 'zod';

export const SignupSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    name: z.string().min(1, {
        message: "Please enter your name"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    }),
    username: z.string().min(1, {
        message: "Please enter your username"
    }),
})

export const SigninSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
})
})