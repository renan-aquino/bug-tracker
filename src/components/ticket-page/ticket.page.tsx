'use client'

import s from './ticket-page.module.css'

import { TicketMessageForm } from '@/components/ticket-message-form.tsx/ticket-message-form';
import { TicketMessageList } from '@/components/ticket-message-list/ticket-message-list';
import { TicketTitle } from '@/components/ticket-title/ticket-title';
import { useDeleteTicket } from '@/hooks/useDelete';
import { useTicket } from '@/hooks/useTicket';
import { useTicketStatus } from '@/hooks/useTicketStatus';
import { fetchBlogPost } from '@/services/fetchTicket';
import axios from 'axios';
import { notFound } from 'next/navigation';
import { useEffect } from 'react'



interface Ticket {
    id: number,
    title: string,
    created_at: string
}

interface ticketPageProps {
    ticketId : string
}

const API_URL = 'http://localhost:8080/ticket/'



export default function TicketPage({ ticketId }: ticketPageProps){
    const { data } = useTicket(ticketId)
    const { mutate: mutateStatus} = useTicketStatus(ticketId)
    const { mutate: mutateDelete} = useDeleteTicket(ticketId)
    
    // const fetcher = async (ticketId: string) => {
    //     const token =  await fetch('http://localhost:3000//login', { method: 'GET'})
    //     const header = token.headers.get('Authorization')
    //     const response = await axios.get(API_URL + 49, { headers: { Authorization: header}})
    
    //     return response
    // }

    // useEffect(() => {
        
    //         let res = fetcher(ticketId)
    //     // res.then(res => {  notFound() })
    //         // notFound()
        
    //     // notFound()
        
    // }, [])
    
    
    

    const submit = () => {
        mutateStatus()
    }

    const deleteTicket = () => {
        mutateDelete()
        window.location.href='http://localhost:3000/tickets'
        
    }
    
    return(
        <main className={s.container}>
            <TicketTitle id={data?.id} date={new Date(data?.created_at).toLocaleDateString()} title={data?.title} status={data?.status}/>
            <div className={s.buttons}>
                <button onClick={submit}>Change status</button>
                <button className={s.delete_btn} onClick={deleteTicket}>Delete ticket</button>
            </div>
            {data?.status == "OPEN" && <TicketMessageForm ticketId={ticketId}/>}
            <TicketMessageList id={ticketId}/>
        </main>
    )
}