'use client'

import Link from 'next/link';
import s from './page.module.css'
import { LoginForm } from "@/components/login-form/login-form";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()


  return (
    <main className={s.container}>
      <h1 className={s.logo}><span>Bug</span> Tracker</h1>
      <LoginForm/>
      <a className={s.register_link} onClick={() => router.push('/register')}>Create an account</a>
    </main>
  )
}
