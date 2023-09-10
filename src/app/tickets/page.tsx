'use client'

import s from './page.module.css'
import { Navbar } from '@/components/navbar/navbar'
import { TicketGrid } from '@/components/ticket-grid/ticket-grid'
import { AuthContext } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { parseCookies } from 'nookies'
import { useEffect, useContext } from 'react'

export default function Login(){

    const router = useRouter()
    const { 'authapi.token': token } = parseCookies()


    useEffect(() => {
        if(!token) {
            router.push('/')
        }
    }, [])

    
    return (
        <main className={s.container}>
            <Navbar/>
            <TicketGrid/>
        </main>
    )
}