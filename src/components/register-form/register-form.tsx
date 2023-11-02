'use client'

import s from './register-form.module.css'
import { useForm } from "react-hook-form"
import { useRegister } from '@/hooks/useRegister'
import { useRef } from 'react'


export function RegisterForm(){
    const { register, handleSubmit } = useForm()
    const nameRef = useRef(null)
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)


    const handleSignUp = async (data) => {
        
       if(usernameRef.current.value != '' || passwordRef.current.value != '' || nameRef.current.value != '') {
        const res = await useRegister(data)
       }
        window.location.href='/'
    }

    return (
        <form className={s.register_form} onSubmit={handleSubmit(handleSignUp)}>
            <input {...register('name')} ref={nameRef} type="text" placeholder="name"/>
            <input {...register('login')} ref={usernameRef} type="text" placeholder="username"/>
            <input {...register('password')} ref={passwordRef} type="password" placeholder="password" />
            {/* <input {...register('counterPassword')} type="password" placeholder="password" /> */}
            <button value='submit'>Submit</button>
        </form>
    )
}