'use client'

import s from './register-form.module.css'
import { useForm } from "react-hook-form"
import { useRegister } from '@/hooks/useRegister'


export function RegisterForm(){
    const { register, handleSubmit } = useForm()


    const handleSignUp = async (data) => {
       const res = await useRegister(data)
       if(res == 200) {
        window.location.href='http://localhost:3000'
       }
    }

    return (
        <form className={s.login_form} onSubmit={handleSubmit(handleSignUp)}>
            <input {...register('name')} type="text" placeholder="name"/>
            <input {...register('login')} type="text" placeholder="username"/>
            <input {...register('password')} type="password" placeholder="password" />
            {/* <input {...register('counterPassword')} type="password" placeholder="password" /> */}
            <button value='submit'>Submit</button>
        </form>
    )
}