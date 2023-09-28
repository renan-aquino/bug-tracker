'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import s from './header.module.css'
import { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import { destroyCookie, parseCookies } from 'nookies'

export default function Header(){
    const router = useRouter()
    const { name } = parseCookies()
    const { setAuthToken } = useContext(AuthContext)

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

    const logout = () => {
        console.log('hi')
        destroyCookie(undefined, 'authapi.token')
        destroyCookie(undefined, 'name')
        setAuthToken(null)
    }
    
    return (
        <header className={s.header_tag}>
            <div className={s.container}>
                <a onClick={handleClick} className={s.logo}><span>Bug</span> Tracker</a>
                
                <div className={s.login}>
                    {name && <p>{name}</p>}
                    <p>|</p>
                    <a onClick={logout}>Log out</a>
                </div>
            </div>

        </header>
    )
}