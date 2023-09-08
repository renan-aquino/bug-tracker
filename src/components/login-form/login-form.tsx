'use client'

import { useContext } from 'react'
import s from './login-form.module.css'
import { useForm } from "react-hook-form"
import { AuthContext } from '@/contexts/AuthContext'


export function LoginForm(){
    const { register, handleSubmit } = useForm()
    const { signIn } = useContext(AuthContext)


    const handleSignIn = async (data) => {
        await signIn(data)

    }

    return (
        <form className={s.login_form} onSubmit={handleSubmit(handleSignIn)}>
            <input {...register('login')} type="text" placeholder="username"/>
            <input {...register('password')} type="text" placeholder="password" />
            <button value='submit'>Submit</button>
        </form>
    )
}