'use client'

import s from './page.module.css'

import { TicketMessageForm } from '@/components/ticket-message-form.tsx/ticket-message-form';
import { TicketMessageList } from '@/components/ticket-message-list/ticket-message-list';
import { TicketTitle } from '@/components/ticket-title/ticket-title';
import { useTicket } from '@/hooks/useTicket';
import { useTicketStatus } from '@/hooks/useTicketStatus';



interface Ticket {
    id: number,
    title: string,
    created_at: string
}


export default function Ticket({ params : { id }}: { params: { id: string } }){
    const { data } = useTicket(id)
    const { mutate } = useTicketStatus(id)


    const submit = () => {
        mutate()
    }
    
    return(
        <main className={s.container}>
            <TicketTitle id={data?.id} date={data?.created_at} title={data?.title} status={data?.status}/>
            <button onClick={submit}>Change status</button>
            {data?.status == "OPEN" && <TicketMessageForm ticketId={id}/>}
            <TicketMessageList id={id}/>
        </main>
    )
}