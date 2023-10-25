import { RegisterForm } from '@/components/register-form/register-form'
import s from './page.module.css'

export default function Register(){
    return(
        <main className={s.container}>
            <h1 className={s.logo}><span>Bug</span> Tracker</h1>
            <RegisterForm></RegisterForm>
        </main>
    )
}