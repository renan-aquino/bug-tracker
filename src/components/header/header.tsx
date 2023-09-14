'use client'

import { useRouter } from 'next/navigation'
import s from './header.module.css'

export default function Header(){
    const router = useRouter()

    const handleClick = () => {
        router.push('/tickets')
    }
    
    return (
        <header className={s.header_tag}>
            <div className={s.container}>
                <a onClick={handleClick} className={s.logo}><span>Bug</span> Tracker</a>
                
                <div className={s.login}>
                    <p>Username</p>
                    <p>|</p>
                    <a>Log out</a>
                </div>
            </div>

        </header>
    )
}