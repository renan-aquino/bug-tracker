'use client'

import s from './ticket-page.module.css'

import { TicketMessageForm } from '@/components/ticket-message-form.tsx/ticket-message-form';
import { TicketMessageList } from '@/components/ticket-message-list/ticket-message-list';
import { TicketTitle } from '@/components/ticket-title/ticket-title';
import { useDeleteTicket } from '@/hooks/useDelete';
import { useTicket } from '@/hooks/useTicket';
import { useTicketStatus } from '@/hooks/useTicketStatus';


interface ticketPageProps {
    ticketId : string
}



export default function TicketPage({ ticketId }: ticketPageProps){
    const { data } = useTicket(ticketId)
    const { mutate: mutateStatus} = useTicketStatus(ticketId)
    const { mutate: mutateDelete} = useDeleteTicket(ticketId)
    
    const submit = () => {
        mutateStatus()
    }

    const deleteTicket = () => {
        mutateDelete()
        window.location.href='/tickets'
        
    }
    
    return(
        <main className={s.container}>
            <TicketTitle id={data?.id} date={new Date(data?.created_at).toLocaleDateString('en-us')} title={data?.title} status={data?.status}/>
            <div className={s.buttons}>
                <button onClick={submit}>Change status</button>
                <button className={s.delete_btn} onClick={deleteTicket}>Delete ticket</button>
            </div>
            {data?.status == "OPEN" && <TicketMessageForm ticketId={ticketId}/>}
            <TicketMessageList id={ticketId}/>
        </main>
    )
}