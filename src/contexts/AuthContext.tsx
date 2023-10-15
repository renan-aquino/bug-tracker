'use client'

import { useLogin } from "@/hooks/useLogin";
import { createContext} from "react"

type SignInData = {
    login: string;
    password: string;
}

type AuthContextType = {
    signIn: (data: SignInData) => Promise<Response>;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }){


    const signIn = async ({login, password }) => {
        const { token, user } = await useLogin( { login, password } )

        const res = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({token: token, user: user})
        })
   
        return res
    }


    return (
        <AuthContext.Provider value={{signIn}}>
            {children}
        </AuthContext.Provider>
    )
}