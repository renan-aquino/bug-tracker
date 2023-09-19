'use client'

import { useTickets } from '@/hooks/useTickets'
import { TicketCard } from '../ticket-card/ticket-card'
import s from './ticket-grid.module.css'
import { useRouter } from 'next/navigation'

export function TicketGrid(){
    const { data }  = useTickets()
    const router = useRouter()

    const handleNavigate = (id) => {
        router.push('/tickets/ticket/' + id)
    }


    return (
        <div className={s.container}>
            <ul className={s.list}>
                {data?.map(ticket =>
                    <TicketCard title={ticket.title} date={new Date(ticket.created_at).toLocaleDateString()} handleClick={() => handleNavigate(ticket.id)}  key={ticket.id}/>
                )}
            </ul>
        </div>
    )
}