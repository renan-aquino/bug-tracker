'use client'

import { useLogin } from "@/hooks/useLogin";
import { api } from "@/services/api";
import { useRouter }  from "next/navigation";
import { parseCookies, setCookie } from "nookies";
import { createContext, useState, useEffect, Dispatch, SetStateAction } from "react"

type SignInData = {
    login: string;
    password: string;
}

interface User {
    name: string
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User;
    signIn: (data: SignInData) => Promise<void>;
    setAuthToken : Dispatch<SetStateAction<string>>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }){

    const [user, setUser] = useState<User | null>(null)
    const [authToken, setAuthToken] = useState<string | null>(null)
    const router = useRouter()
    let isAuthenticated = false
    const { 'authapi.token': token } = parseCookies()
    // const { 'name': string } = parseCookies()


    const signIn = async ({login, password }) => {
        const { token, user } = await useLogin( { login, password } )

        setCookie(undefined, 'authapi.token', token, {
            maxAge: 60 * 60 * 1 // 1 hour
        } )
        setAuthToken(token)

        setCookie(undefined, 'name', user.name, {
            maxAge: 60 * 60 * 1 // 1 hour
        } )

        api.defaults.headers['Authorization'] = `Bearer ${token}`

        setUser(user)
        console.log(user)
    
        router.push('/tickets')    
    }

    useEffect(() => {
        if(!token) {
            router.push('/')    
        } 
    },[authToken])

    return (
        <AuthContext.Provider value={{isAuthenticated, user, signIn, setAuthToken}}>
            {children}
        </AuthContext.Provider>
    )
}