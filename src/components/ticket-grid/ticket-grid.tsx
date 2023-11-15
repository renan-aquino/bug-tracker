'use client'

import { useTickets } from '@/hooks/useTickets'
import { TicketCard } from '../ticket-card/ticket-card'
import s from './ticket-grid.module.css'

export function TicketGrid(){
    const { data }  = useTickets()

    return (
        <div className={s.container}>
            <ul className={s.list}>
                {data?.map(ticket =>
                    <TicketCard  id={ticket?.id} title={ticket.title} date={new Date(ticket.created_at).toLocaleDateString('en-us')} key={ticket.id}/>
                )}
            </ul>
        </div>
    )
}