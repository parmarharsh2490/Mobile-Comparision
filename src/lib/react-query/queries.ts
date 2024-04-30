import { Mutation, useMutation } from "@tanstack/react-query"
import {  createUserAccount, signInAccount } from "../appwrite/api"
import { INewUser } from "@/types"

export const useHandleSignup = () => {
    return useMutation({
        mutationFn : (user : INewUser) => createUserAccount(user),
    })
}
export const useHandleSignin = () => {
    return useMutation({
        mutationFn : (user : {email: string,password : string}) => signInAccount(user),
    })
}