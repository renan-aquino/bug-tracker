
import s from './page.module.css'
import { Navbar } from '@/components/navbar/navbar'
import { TicketGrid } from '@/components/ticket-grid/ticket-grid'

export default function Login(){
    return (
        <main className={s.container}>
            <Navbar/>
            <TicketGrid/>
        </main>
    )
}