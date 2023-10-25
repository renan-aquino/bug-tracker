'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import s from './header.module.css'
import { parseCookies } from 'nookies'


export default function Header(){
    const router = useRouter()
    const { name } = parseCookies()

    const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		setHydrated(true);
	}, []);
    if (!hydrated) {
		return null;
	}

    const handleClick = () => {
        router.push('/tickets')
    }

    const handleLogout = async () => {
        await fetch('/logout')
        window.location.href='/'
    }

    return (
        <header className={s.container}>
            {/* <div className={s.container}> */}
                <a onClick={handleClick} className={s.logo}><span>Bug</span> Tracker</a>
                
                <div className={s.login}>
                    {name && <p>{name}</p>}
                    <p>|</p>
                    <a onClick={handleLogout}>Log out</a>
                </div>
            {/* </div> */}

        </header>
    )
}