'use client'

import { useRouter } from 'next/navigation'
import s from './navbar.module.css'


export function Navbar(){
    const router = useRouter()

    const handleClick = () => {
        router.push('tickets/new')
    }

    return (
        <div className={s.container}>
            <h2>Tickets</h2>
            <button onClick={handleClick}>Novo ticket</button>
        </div>
    )
}