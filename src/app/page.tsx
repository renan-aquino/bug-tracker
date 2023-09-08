import s from './page.module.css'
import { LoginForm } from "@/components/login-form/login-form";

export default function Home() {
  return (
    <main className={s.container}>
      <h1 className={s.logo}><span>Bug</span> Tracker</h1>
      <LoginForm/>
    </main>
  )
}
