'use client'

import s from './page.module.css'
import { Navbar } from '@/components/navbar/navbar'
import { TicketGrid } from '@/components/ticket-grid/ticket-grid'
import { useRouter } from 'next/navigation'


export default function Login(){

    const router = useRouter()



    
    return (
        <main className={s.container}>
            <Navbar/>
            <TicketGrid/>
        </main>
    )
}