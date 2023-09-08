'use client'

import { useTicket } from '@/hooks/useTicket'
import { TicketCard } from '../ticket-card/ticket-card'
import s from './ticket-grid.module.css'

export function TicketGrid(){
    const { data }  = useTicket()

    return (
        <div className={s.container}>
            <div className={s.column}>
                <h3 className={s.category}>Suporte</h3>
                <ul className={s.list}>
                    {data?.map(ticket =>
                        <TicketCard title={ticket.title} date={ticket.created_at} key={ticket.id}/>
                    )}

                </ul>
            </div>
            <div className={s.column}>
                <h3 className={s.category}>Atualização</h3>
                <ul className={s.list}>
                    {data?.map(ticket =>
                            <TicketCard title={ticket.title} date={ticket.created_at} key={ticket.id}/>
                        )}
                </ul>
            </div>
        </div>
    )
}