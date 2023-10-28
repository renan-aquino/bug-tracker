'use client'

import { RegisterForm } from '@/components/register-form/register-form'
import s from './page.module.css'
import { useRouter } from 'next/navigation';


export default function Register(){
  const router = useRouter()

    return(
        <main className={s.container}>
            <h1 className={s.logo}><span>Bug</span> Tracker</h1>
            <RegisterForm></RegisterForm>
            <a className={s.register_link} onClick={() => router.push('/')}>Already have an account? Sing in.</a>

        </main>
    )
}