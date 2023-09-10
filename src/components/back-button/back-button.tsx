'use client'

import { useRouter } from 'next/navigation'
import { GoBackIcon } from '../go-back-icon'
import s from './back-button.module.css'

export function BackButton(){
    const router = useRouter()

    return (
        <button className={s.back_button} onClick={() => router.push('/tickets')} ><GoBackIcon/>Voltar</button>
    )
}