'use client'

import s from './page.module.css'

import { Navbar } from "@/components/navbar/navbar";
import { TicketMessageForm } from '@/components/ticket-message-form.tsx/ticket-message-form';
import { TicketMessageList } from '@/components/ticket-message-list/ticket-message-list';
import { TicketMessage } from '@/components/ticket-message/ticket-message';
import { TicketTitle } from '@/components/ticket-title/ticket-title';
import { useMessages } from '@/hooks/useMessages';
import { useTicket } from '@/hooks/useTicket';
import { api } from "@/services/api";
import axios from "axios";


interface Ticket {
    id: number,
    title: string,
    created_at: string
}

export default function Ticket({ params : { id }}: { params: { id: string } }){
    const { data } = useTicket(id)
    // const { data } = useMessages(id)

    return(
        <main className={s.container}>
            <TicketTitle id={data?.id} date={data?.created_at} title={data?.title}/>
            <TicketMessageForm ticketId={id}/>
            <TicketMessageList id={id}/>
        </main>
    )
}